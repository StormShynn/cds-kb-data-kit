---
name: I_CAPACITYTEXTBASIC
description: "Enterprise Resource Capacity - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYTEXTBASIC')/$value
semantic_en: "Enterprise Resource Capacity - Text"
semantic_vi: "Enterprise Resource Capacity - Text — CDS view giao diện dựa trên I_CapacityText."
keywords:
  - "enterprise"
  - "resource"
  - "capacity"
  - "text"
  - "internal"
  - "language"
tags:
  - PP
  - bo:salesorder
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_CAPACITYTEXTBASIC

**Enterprise Resource Capacity - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYTEXTBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityInternalID` | ✓ | | `_Text` | `CapacityInternalID` | `NUMC(8)` | Capacity ID |
| `Language` | ✓ | | `_Text` | `Language` | `LANG(1)` | Language Key |
| `CapacityText` |  | | `_Text` | `CapacityText` | `CHAR(40)` | Capacity Short Text |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYTEXTBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CAPACITYTEXTBASIC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Enterprise Resource Capacity - Text'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory:  #TEXT
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'CapacityInternalID'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'EnterpriseResourceCapacityText'
define view entity I_CapacityTextBasic
  as select from I_CapacityText             as _Text
    inner join   I_CapacityBasic as _PooledCapHeader on _Text.CapacityInternalID = _PooledCapHeader.CapacityInternalID
{
  key _Text.CapacityInternalID           as CapacityInternalID,
      @ObjectModel.foreignKey.association: '_Language'
  key _Text.Language,
      @Semantics.text: true
      _Text.CapacityText,
      
      /* Associations */
      _Text._Language
}
```
