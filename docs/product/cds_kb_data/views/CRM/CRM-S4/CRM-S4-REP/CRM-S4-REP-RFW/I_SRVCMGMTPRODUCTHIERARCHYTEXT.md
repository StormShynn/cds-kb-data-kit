---
name: I_SRVCMGMTPRODUCTHIERARCHYTEXT
description: "Srvcmgmtproducthierarchytext"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - product
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCMGMTPRODUCTHIERARCHYTEXT

**Srvcmgmtproducthierarchytext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcProductHierarchy` | ✓ | |  | `cast ( ProductHierarchy as abap.char(20) )` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `SrvcProductHierarchyText` |  | |  | `ProductHierarchyText` |  |  |
| `_SrvcMgmtProductHierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcMgmtProductHierarchy` | `I_SrvcMgmtProductHierarchy` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Product Hierarchy - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCPRODHIERTXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SrvcProductHierarchy',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcMgmtProductHierarchyText 
    as select from I_ProductHierarchyText
       association [1] to I_SrvcMgmtProductHierarchy as _SrvcMgmtProductHierarchy on $projection.SrvcProductHierarchy = _SrvcMgmtProductHierarchy.SrvcProductHierarchy
       association [1..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcMgmtProductHierarchy'
  key cast ( ProductHierarchy as abap.char(20) ) as SrvcProductHierarchy,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
      @Semantics.text: true
      ProductHierarchyText as SrvcProductHierarchyText,

      _SrvcMgmtProductHierarchy,
      _Language
}
```
