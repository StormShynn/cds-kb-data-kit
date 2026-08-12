---
name: I_CAPACITYTEXTBASIC
description: "Enterprise Resource Capacity - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
