---
name: I_CNSLDTNBUSINESSAREAHIERTEXT
description: "Cnsldtnbusinessareahiertext"
app_component: FIN-CS-MD-2CL
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
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNBUSINESSAREAHIERTEXT

**Cnsldtnbusinessareahiertext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `Language` | ✓ | | `_HierarchyText` | `Language` |  |  |
| `CnsldtnBusinessAreaHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierHierarchyID as fincs_businessareahierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnBusinessAreaHierText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_description_text_50 preserving type )` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnBusinessAreaHierarchy` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCBUSAHIERT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  dataCategory: #TEXT,
  representativeKey: 'CnsldtnBusinessAreaHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnBusinessAreaHierText'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Business Area Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnBusinessAreaHierText
  as select from P_CnsldtnUnivHierarchyText(P_HierarchyType : 'CS06', P_MasterDataType : 'RBUSA' ) as _HierarchyText

  association [1..1] to I_CnsldtnBusinessAreaHierarchy as _Hierarchy on  $projection.CnsldtnBusinessAreaHierarchy = _Hierarchy.CnsldtnBusinessAreaHierarchy
                                                                     and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate

{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

  key   cast(_HierarchyText.UniversalHierHierarchyID as fincs_businessareahierarchy preserving type ) as CnsldtnBusinessAreaHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_description_text_50 preserving type )     as CnsldtnBusinessAreaHierText,


        _Language,
        _Hierarchy
};
```
