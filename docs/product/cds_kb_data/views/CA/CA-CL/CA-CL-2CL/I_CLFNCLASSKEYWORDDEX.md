---
name: I_CLFNCLASSKEYWORDDEX
description: "Clfnclasskeyworddex"
app_component: CA-CL-2CL
software_component: SAP_BASIS
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
  - CA-CL
  - interface-view
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSKEYWORDDEX

**Clfnclasskeyworddex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  |  | `NUMC(10)` | Internal Class Number |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ClassKeywordPositionNumber` | ✓ | |  |  | `NUMC(2)` | Position Number |
| `ClassKeywordText` |  | |  |  | `CHAR(40)` | Keywords |
| `_Language` | | ✓ | | | | |
| `_Class` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Class` | `I_ClfnClassDEX` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY 
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [ 
  { table: 'SWOR',
    role: #MAIN,
    tableElement: ['CLINT','SPRAS','KLPOS'], 
    viewElement: ['ClassInternalID','Language','ClassKeywordPositionNumber'] } ]
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Keyword of Clfn Class DEX'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ClassKeywordPositionNumber'
@ObjectModel.supportedCapabilities:
   [ #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,     
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #MASTER     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC 
define view entity I_ClfnClassKeywordDEX
  as select from I_ClfnClassKeyword as ClassKeyword
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language

      association [0..1] to I_ClfnClassDEX as _Class 
        on $projection.ClassInternalID = _Class.ClassInternalID         
{     
      @ObjectModel.foreignKey.association: '_Class'
  key ClassKeyword.ClassInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ClassKeyword.Language,
      @ObjectModel.foreignKey.association: null
  key ClassKeyword.ClassKeywordPositionNumber,
      @Semantics.text: true
      ClassKeyword.ClassKeywordText,

      _Language,
      _Class
}
```
