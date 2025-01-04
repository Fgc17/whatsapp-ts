
import { BarrelEntryConfig, typeDeclarations } from 'barrelgun'

export default BarrelEntryConfig({
    roots: ['./src/sdk'],
    output: './src/sdk/index.ts',
    exports: ['const', ...typeDeclarations]
})