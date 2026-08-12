---
name: I_DOCUMENTINFORECORDDOCVERSION
description: "Documentinforecorddocversion"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_DOCUMENTINFORECORDDOCVERSION

**Documentinforecorddocversion**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  | `dokar` |  |  |
| `DocumentInfoRecordDocNumber` | ✓ | |  | `doknr` |  |  |
| `DocumentInfoRecordDocVersion` | ✓ | |  | `dokvr` |  |  |
| `_TEXT` | | ✓ | | | | |
| `_DocType` | | ✓ | | | | |
| `_DocNumber` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TEXT` | `I_DocumentInfoRecordDocTypeT` | [0..*] |
| `_DocType` | `I_DocumentInfoRecordDocType` | [1..1] |
| `_DocNumber` | `I_DocumentInfoRecordDocNumber` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCUMENTVERS'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Document Info Record Document Version'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DocumentInfoRecordDocVersion'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Search.searchable: true

//--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
@AccessControl.privilegedAssociations: ['_TEXT']
// ]--GENERATED
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_DocumentInfoRecordDocVersion
  as select from draw as document

  --Get Document Type Association
  
  //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
  association [0..*] to I_DocumentInfoRecordDocTypeT      as _TEXT on   $projection.DocumentInfoRecordDocType = _TEXT.DocumentInfoRecordDocType
  // ]--GENERATED
  association [1..1] to I_DocumentInfoRecordDocType   as _DocType   on  $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType

  --Get Document Number Association
  association [1..1] to I_DocumentInfoRecordDocNumber as _DocNumber on  $projection.DocumentInfoRecordDocType   = _DocNumber.DocumentInfoRecordDocType
                                                                    and $projection.DocumentInfoRecordDocNumber = _DocNumber.DocumentInfoRecordDocNumber

{
      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_DocInfoRecdDocTypeStdVH',
                     element: 'DocumentInfoRecordDocType' }
        }]
      @ObjectModel.text.association: '_TEXT'
      // ]--GENERATED
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 1
      @ObjectModel.foreignKey.association:'_DocType'
  key document.dokar  as  DocumentInfoRecordDocType,

      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_DocInfoRecdDocNmbrStdVH',
                     element: 'DocumentInfoRecordDocNumber' },
          additionalBinding: [{ localElement: 'DocumentInfoRecordDocType',
                                element: 'DocumentInfoRecordDocType' }]
        }]
      // ]--GENERATED
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 1
      @ObjectModel.foreignKey.association:'_DocNumber'
  key document.doknr  as  DocumentInfoRecordDocNumber,

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key document.dokvr  as  DocumentInfoRecordDocVersion,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _DocType,
      _DocNumber,
      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.hidden: true
      _TEXT
      // ]--GENERATED

            
}
```
