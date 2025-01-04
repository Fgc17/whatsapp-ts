
import { BarrelEntryConfig, typeDeclarations } from 'barrelgun'

export default BarrelEntryConfig({
    roots: ['./src/graph-api/resources', './src/graph-api/webhooks'],
    output: 'src/graph-api/index.ts',
    exports: [...typeDeclarations, 'class'],
    append: ['./src/graph-api/resources/endpoints.ts']
})