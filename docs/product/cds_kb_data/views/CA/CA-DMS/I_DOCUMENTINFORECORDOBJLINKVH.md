---
name: I_DOCUMENTINFORECORDOBJLINKVH
description: "Documentinforecordobjlinkvh"
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
  - value-help
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDOBJLINKVH

**Documentinforecordobjlinkvh**

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
| `LinkedSAPObject` | ✓ | |  | `dokob` | `CHAR(10)` | Linked SAP Object |
| `ObjectTypeDatabaseTable` |  | |  | `vobj` | `CHAR(30)` | Classification Object |
| `_DocTypeText` | | ✓ | | | | |
| `_DocType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocTypeText` | `I_DocumentInfoRecordDocTypeT` | [0..1] |
| `_DocType` | `I_DocumentInfoRecordDocType` | [1..1] |
| `_Text` | `I_DocumentInfoRecordObjLinkT` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCOBJLINKVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Document Info Record ObjectLink'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot:true
@ObjectModel.representativeKey: 'LinkedSAPObject'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #M
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION , #CDS_MODELING_ASSOCIATION_TARGET , #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #NONE
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked:true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.lifecycle: {
  contract: {
    type:#PUBLIC_LOCAL_API
    //status:,
    //successor: ''
  }
}

//--[ GENERATED:012:E6ExH29r7kY4mnTDE{v9O0
@AccessControl.privilegedAssociations: ['_DocTypeText']
// ]--GENERATED

define view I_DocumentInfoRecordObjLinkVH
  as select from tdwo        as ObjLink

   
   
   join tclo as _botclo on _botclo.obtab          = ObjLink.dokob

  //--[ GENERATED:012:E6ExH29r7kY4mnTDE{v9O0
  association [0..1] to I_DocumentInfoRecordDocTypeT      as _DocTypeText on   $projection.DocumentInfoRecordDocType = _DocTypeText.DocumentInfoRecordDocType
  and _DocTypeText.Language = $session.system_language 
  // ]--GENERATED
  association [1..1] to I_DocumentInfoRecordDocType  as _DocType on $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType
  
  association [0..1] to I_DocumentInfoRecordObjLinkT as _Text    on $projection.LinkedSAPObject = _Text.LinkedSAPObject 
  and _Text.Language = $session.system_language
{
      //--[ GENERATED:012:E6ExH29r7kY4mnTDE{v9O0
      @Consumption.valueHelpDefinition: [ 
       { entity:  { name:    'I_DocInfoRecdDocTypeStdVH',
                     element: 'DocumentInfoRecordDocType' }
        }]
      @ObjectModel.text.association: '_DocTypeText'
      // ]--GENERATED
     // @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT //Added for TypeAhead 
      @Search.defaultSearchElement: true
      @Search.ranking: #MEDIUM
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.foreignKey.association: '_DocType'
  key ObjLink.dokar                        as DocumentInfoRecordDocType,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
  key ObjLink.dokob                        as LinkedSAPObject,

      ObjLink.vobj                         as ObjectTypeDatabaseTable,

      //Associations
      _DocType,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      //--[ GENERATED:012:E6ExH29r7kY4mnTDE{v9O0
      @Consumption.hidden: true
      _DocTypeText
      // ]--GENERATED
      
}
```
