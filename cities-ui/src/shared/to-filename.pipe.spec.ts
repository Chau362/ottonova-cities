import { ToFileNamePipe } from './to-filename.pipe';

describe('ToFilenamePipe', () => {
  let pipe: ToFileNamePipe;

  beforeEach(() => {
    pipe = new ToFileNamePipe();
  });

  it('should transform a string without white space to lowercase', () => {
    const input = 'Sydney';
    const transformed = pipe.transform(input);
    expect(transformed).toEqual('sydney');
  });

  it('should replace spaces with dashes for a string in lowercase with whitespace', () => {
    const input = 'hello world';
    const transformed = pipe.transform(input);
    expect(transformed).toEqual('hello-world');
  });

  it('should replace spaces with dashes and lowercase for a string in in uppercase with whitespace', () => {
    const input = 'New York City';
    const transformed = pipe.transform(input);
    expect(transformed).toEqual('new-york-city');
  });

  it('should lowercase a string without spaces', () => {
    const input = 'HelloWorld';
    const transformed = pipe.transform(input);
    expect(transformed).toEqual('helloworld');
  });
});
