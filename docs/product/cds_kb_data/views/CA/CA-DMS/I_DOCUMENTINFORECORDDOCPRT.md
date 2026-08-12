---
name: I_DOCUMENTINFORECORDDOCPRT
description: "Documentinforecorddocprt"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDDOCPRT

**Documentinforecorddocprt**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  | `dokar` |  |  |
| `DocumentInfoRecordDocNumber` | ✓ | |  | `doknr` |  |  |
| `DocumentInfoRecordDocVersion` | ✓ | |  | `dokvr` |  |  |
| `DocumentInfoRecordDocPart` | ✓ | |  | `doktl` |  |  |
| `DocumentDescription` |  | |  | `_DocDescription[1:Language = $session.system_language].DocumentDescription` |  |  |
| `_TEXT` | | ✓ | | | | |
| `_DocType` | | ✓ | | | | |
| `_DocNumber` | | ✓ | | | | |
| `_DocVersion` | | ✓ | | | | |
| `_DocDescription` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TEXT` | `I_DocumentInfoRecordDocTypeT` | [0..*] |
| `_DocType` | `I_DocumentInfoRecordDocType` | [1..1] |
| `_DocNumber` | `I_DocumentInfoRecordDocNumber` | [1..1] |
| `_DocVersion` | `I_DocumentInfoRecordDocVersion` | [1..1] |
| `_DocDescription` | `I_DocumentInfoRecordDesc` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCPRT'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Document Info Record Document Part'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DocumentInfoRecordDocPart'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
//--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
@AccessControl.privilegedAssociations: ['_TEXT']
// ]--GENERATED
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.lifecycle: {
  contract: {
    type:#PUBLIC_LOCAL_API
  }
}
@Search.searchable: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_DocumentInfoRecordDocPrt
  as select from draw as document

  --Get Document Type Association
  
  //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
  association [0..*] to I_DocumentInfoRecordDocTypeT      as _TEXT on   $projection.DocumentInfoRecordDocType = _TEXT.DocumentInfoRecordDocType
  // ]--GENERATED
  association [1..1] to I_DocumentInfoRecordDocType    as _DocType        on  $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType

  --Get Document Number Association
  association [1..1] to I_DocumentInfoRecordDocNumber  as _DocNumber      on  $projection.DocumentInfoRecordDocType    = _DocNumber.DocumentInfoRecordDocType
                                                                          and $projection.DocumentInfoRecordDocNumber  = _DocNumber.DocumentInfoRecordDocNumber
                                                                        
                                                                          

  --Get Document Version Association
  association [1..1] to I_DocumentInfoRecordDocVersion as _DocVersion     on  $projection.DocumentInfoRecordDocType    = _DocVersion.DocumentInfoRecordDocType
                                                                          and $projection.DocumentInfoRecordDocNumber  = _DocVersion.DocumentInfoRecordDocNumber
                                                                          and $projection.DocumentInfoRecordDocVersion = _DocVersion.DocumentInfoRecordDocVersion

  --Get Document Description Association
  association [0..*] to I_DocumentInfoRecordDesc       as _DocDescription on  $projection.DocumentInfoRecordDocPart    = _DocDescription.DocumentInfoRecordDocPart
                                                                          and $projection.DocumentInfoRecordDocType    = _DocDescription.DocumentInfoRecordDocType
                                                                          and $projection.DocumentInfoRecordDocVersion = _DocDescription.DocumentInfoRecordDocVersion
                                                                          and $projection.DocumentInfoRecordDocNumber  = _DocDescription.DocumentInfoRecordDocNumber

{           
      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_DocInfoRecdDocTypeStdVH',
                     element: 'DocumentInfoRecordDocType' }
        }]
      //@ObjectModel.text.association: '_TEXT'
      // ]--GENERATED
      @ObjectModel.foreignKey.association:'_DocType'
      @Search.defaultSearchElement: true
  key document.dokar                                                             as  DocumentInfoRecordDocType,

      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_DocInfoRecdDocNmbrStdVH',
                     element: 'DocumentInfoRecordDocNumber' },
          additionalBinding: [{ localElement: 'DocumentInfoRecordDocType',
                                element: 'DocumentInfoRecordDocType' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association:'_DocNumber'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key document.doknr                                                             as  DocumentInfoRecordDocNumber,

      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_DocInfoRecdDocVersStdVH',
                     element: 'DocumentInfoRecordDocVersion' },
          additionalBinding: [{ localElement: 'DocumentInfoRecordDocType',
                                element: 'DocumentInfoRecordDocType' },
                              { localElement: 'DocumentInfoRecordDocNumber',
                                element: 'DocumentInfoRecordDocNumber' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association:'_DocVersion'
      @Search.defaultSearchElement: true
  key document.dokvr                                                             as  DocumentInfoRecordDocVersion,
      
      @Search.defaultSearchElement: true
  key document.doktl                                                             as  DocumentInfoRecordDocPart,
         
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @EndUserText.label:'Document Description'
      _DocDescription[1:Language = $session.system_language].DocumentDescription as  DocumentDescription,

      //Associations      
      _DocDescription,      
      _DocType,
      _DocNumber,
      _DocVersion,
      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.hidden: true
      _TEXT
      // ]--GENERATED

}
```
