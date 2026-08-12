---
name: I_FINWBSELEMENTHIERARCHYTEXT
description: "Finwbselementhierarchytext"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - wbs
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:WBS
---
# I_FINWBSELEMENTHIERARCHYTEXT

**Finwbselementhierarchytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementHierarchy` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `WBSElementHierarchyText` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'WBSElementHierarchy'

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Fin WBS Element Hierarchy - Text'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #C,
  sizeCategory: #XL
}
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIWBSELEMENTHT'
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name:'FinWBSElementHierarchyText'

define view entity I_FinWBSElementHierarchyText
  as select from R_FinWBSElementHierarchyText
  //    inner join   R_FinWBSElementHierarchy on  R_FinWBSElementHierarchy.WBSElementHierarchy    = $projection.WBSElementHierarchy
  //                                and R_FinWBSElementHierarchy.ValidityEndDate = $projection.ValidityEndDate

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key   R_FinWBSElementHierarchyText.WBSElementHierarchy,

        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language
  key   R_FinWBSElementHierarchyText.Language,
        @Semantics.businessDate.to: true
  key   R_FinWBSElementHierarchyText.ValidityEndDate,
        @Semantics.businessDate.from: true
        R_FinWBSElementHierarchyText.ValidityStartDate,
        @Semantics.text: true
        R_FinWBSElementHierarchyText.WBSElementHierarchyText,
        _Language
}


union all

select from R_WBSElementHierarchyText
//I_DataElementLabelText
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{

  key  R_WBSElementHierarchyText.WBSElementHierarchy as WBSElementHierarchy,

  key  Language,
       //key cast (Language as spras)                          as Language,
  key  ValidityEndDate,
       ValidityStartDate,
       WBSElementHierarchyText,
       //cast(ABAPDataElementDescription as fis_val_text)  as WBSElementHierarchyText,
       _Language

}
```
