---
name: I_PROJECTPROFILECODETEXT
description: "Projectprofilecodetext"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - text-view
  - project
  - text
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_PROJECTPROFILECODETEXT

**Projectprofilecodetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectProfileCode` | ✓ | |  | `profidproj` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProjectProfileCodeText` |  | |  | `profi_txt` |  |  |
| `_Code` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Code` | `I_ProjectProfileCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'PROJPROFCODETXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Profile Code - Text'
@VDM.viewType: #BASIC
@Analytics: { dataExtraction.enabled: true}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProjectProfileCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,  #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'ProjectProfileCodeText'
@ClientHandling.algorithm: #SESSION_VARIABLE
//@VDM.lifecycle.contract.type:  #SAP_INTERNAL_API
@Metadata.ignorePropagatedAnnotations:true

define view I_ProjectProfileCodeText
  as select from tcj4t
  association [0..1] to I_ProjectProfileCode as _Code     on $projection.ProjectProfileCode = _Code.ProjectProfileCode
  association [0..1] to I_Language           as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Code'
  key profidproj as ProjectProfileCode,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras      as Language,

      @Semantics.text
      profi_txt  as ProjectProfileCodeText,

      _Code,
      _Language
};
```
