---
name: I_CLFNCLASSKEYWORD
description: "Clfnclasskeyword"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
