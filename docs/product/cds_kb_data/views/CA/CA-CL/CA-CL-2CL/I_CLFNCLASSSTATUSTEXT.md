---
name: I_CLFNCLASSSTATUSTEXT
description: "Clfnclassstatustext"
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
  - text-view
  - text
  - status
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSSTATUSTEXT

**Clfnclassstatustext**

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
| `ClassType` | ✓ | |  | `klart` | `CHAR(3)` | Class Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ClassStatus` | ✓ | |  | `status` | `CHAR(1)` | Class status |
| `ClassStatusName` |  | |  | `stext` | `CHAR(40)` | Text for a table entry |
| `_Language` | | ✓ | | | | |
| `_ClassType` | | ✓ | | | | |
| `_ClassStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ClassType` | `I_ClfnClassTypeBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCLC4'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Status of Classification Class - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ClassStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnClassStatusText 
  as select from tclut as ClassStatusText 
      
      association to parent I_ClfnClassStatus as _ClassStatus
        on $projection.ClassType   = _ClassStatus.ClassType and
           $projection.ClassStatus = _ClassStatus.ClassStatus        
      association [0..1] to I_Language as _Language  
        on $projection.Language = _Language.Language 
      association [0..1] to I_ClfnClassTypeBasic as _ClassType  
        on $projection.ClassType = _ClassType.ClassType 
{ 
      @ObjectModel.foreignKey.association: '_ClassType'
  key ClassStatusText.klart       as ClassType, 
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ClassStatusText.spras       as Language, 
      @ObjectModel.foreignKey.association: '_ClassStatus'
      @ObjectModel.text.element: ['ClassStatusName']
  key ClassStatusText.status      as ClassStatus,
      @Semantics.text: true 
      ClassStatusText.stext       as ClassStatusName,
        
      _ClassType,
      _ClassStatus,
      _Language
}
```
