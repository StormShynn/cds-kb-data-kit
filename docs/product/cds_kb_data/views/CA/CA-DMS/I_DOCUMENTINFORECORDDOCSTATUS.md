---
name: I_DOCUMENTINFORECORDDOCSTATUS
description: "Documentinforecorddocstatus"
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
  - status
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDDOCSTATUS

**Documentinforecorddocstatus**

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
| `DocumentInfoRecordDocType` | ✓ | |  | `dokar` | `CHAR(3)` | Document Type |
| `InternalDocumentStatus` | ✓ | |  | `dokst` | `CHAR(2)` | Document Status |
| `DocInfoRecdStatusType` |  | |  | `dosar` | `CHAR(1)` | Document status type |
| `_DocTypeText` | | ✓ | | | | |
| `_DocType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocTypeText` | `I_DocumentInfoRecordDocTypeT` | [0..*] |
| `_DocType` | `I_DocumentInfoRecordDocType` | [0..1] |
| `_Text` | `I_DocumentInfoRecordDocStatusT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCSTATUS'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Document Info Record Document Status'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot:true 
@ObjectModel.representativeKey: 'InternalDocumentStatus'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: #(001)
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

//--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
@AccessControl.privilegedAssociations: ['_DocTypeText']
// ]--GENERATED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_DocumentInfoRecordDocStatus
  as select from    tdws  as status     

  --Get Document Type Association
  
  //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
  association [0..*] to I_DocumentInfoRecordDocTypeT      as _DocTypeText on   $projection.DocumentInfoRecordDocType = _DocTypeText.DocumentInfoRecordDocType
  // ]--GENERATED
  association [0..1] to I_DocumentInfoRecordDocType as _DocType on $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType

  association [0..*] to I_DocumentInfoRecordDocStatusT  as _Text     on $projection.InternalDocumentStatus = _Text.InternalDocumentStatus

{
      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_DocInfoRecdDocTypeStdVH',
                     element: 'DocumentInfoRecordDocType' }
        }]
      @ObjectModel.text.association: '_DocTypeText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_DocType'
  key status.dokar  as DocumentInfoRecordDocType,

      @EndUserText.label:'Internal Document Status'
      @ObjectModel.text.association: '_Text' 
  key status.dokst  as InternalDocumentStatus,
  
      status.dosar  as DocInfoRecdStatusType, //added by IH to retrieve status
      
      _DocType,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD] 
      _Text,
      //--[ GENERATED:011:GlBfhyFV7jY4gRmvB6oo}W
      @Consumption.hidden: true
      _DocTypeText
      // ]--GENERATED

      
}
```
