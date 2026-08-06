---
name: I_DOCUMENTINFORECORDDOCNUMBER
description: Documentinforecorddocnumber
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
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
# I_DOCUMENTINFORECORDDOCNUMBER

**Documentinforecorddocnumber**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DocumentInfoRecordDocType` | `document.dokar` |
| key `DocumentInfoRecordDocNumber` | `document.doknr` |
| `_Text` | *Association* |
| `_DocType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordDocTypeT` | [0..*] |
| `_DocType` | `I_DocumentInfoRecordDocType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCNUMBER'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey:'DocumentInfoRecordDocNumber'
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL }
@EndUserText.label: 'Document Info Record Document Number'
//--[ GENERATED:012:29JlHNUf7kY4h9rlEfNBsm
@AccessControl.privilegedAssociations: ['_Text']
// ]--GENERATED
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_DocumentInfoRecordDocNumber
  as select distinct from draw as document

  --Get Document Type Association
  
  //--[ GENERATED:012:29JlHNUf7kY4h9rlEfNBsm
  association [0..*] to I_DocumentInfoRecordDocTypeT      as _Text on   $projection.DocumentInfoRecordDocType = _Text.DocumentInfoRecordDocType
  // ]--GENERATED
  association [1..1] to I_DocumentInfoRecordDocType as _DocType on $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType
{
      //--[ GENERATED:012:29JlHNUf7kY4h9rlEfNBsm
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_DocInfoRecdDocTypeStdVH',
                     element: 'DocumentInfoRecordDocType' }
        }]
      @ObjectModel.text.association: '_Text'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_DocType'
  key document.dokar  as  DocumentInfoRecordDocType,


  key document.doknr  as  DocumentInfoRecordDocNumber,
  
 // key document.dokvr  as  DocumentInfoRecordDocVersion,
  
 // key document.doktl  as DocumentInfoRecordDocPart,

      // Associations
      _DocType,
      //--[ GENERATED:012:29JlHNUf7kY4h9rlEfNBsm
      @Consumption.hidden: true
      _Text
      // ]--GENERATED

}
```
