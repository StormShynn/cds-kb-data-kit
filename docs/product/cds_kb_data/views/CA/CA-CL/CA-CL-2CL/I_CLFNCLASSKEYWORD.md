---
name: I_CLFNCLASSKEYWORD
description: "Clfnclasskeyword"
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
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSKEYWORD

**Clfnclasskeyword**

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
| `ClassInternalID` | ✓ | |  | `clint` | `NUMC(10)` | Internal Class Number |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ClassKeywordPositionNumber` | ✓ | |  | `klpos` | `NUMC(2)` | Position Number |
| `ClassKeywordText` |  | |  | `kschl` | `CHAR(40)` | Keywords |
| `_Language` | | ✓ | | | | |
| `_Class` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Class` | `I_ClfnClass` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'INGCCLS4'
@AccessControl.authorizationCheck: #MANDATORY 
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Keyword of Classification Class'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ClassKeywordPositionNumber'
@ObjectModel.supportedCapabilities:
   [ #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,  
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #MASTER   
@ObjectModel.usageType.serviceQuality: #A  
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC 
define view I_ClfnClassKeyword
  as select from swor as ClassKeyword
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language

      association [0..1] to I_ClfnClass as _Class 
        on $projection.ClassInternalID = _Class.ClassInternalID         
{     
      @ObjectModel.foreignKey.association: '_Class'
  key ClassKeyword.clint  as ClassInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ClassKeyword.spras  as Language,
      @ObjectModel.foreignKey.association: null
  key ClassKeyword.klpos  as ClassKeywordPositionNumber,
      @Semantics.text: true
      ClassKeyword.kschl  as ClassKeywordText,

      _Language,
      _Class
}
where ClassKeyword.klpos <> '01'
```
