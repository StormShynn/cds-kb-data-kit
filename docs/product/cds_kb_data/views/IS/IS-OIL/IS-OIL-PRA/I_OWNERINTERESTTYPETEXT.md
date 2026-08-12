---
name: I_OWNERINTERESTTYPETEXT
description: "Owner Interest Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTTYPETEXT')/$value
semantic_en: "Owner Interest Type - Text"
semantic_vi: "Owner Interest Type - Text — CDS view giao diện dựa trên oiu_cm_pintty_tx."
keywords:
  - "owner"
  - "interest"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_OWNERINTERESTTYPETEXT

**Owner Interest Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OwnerInterestType` | ✓ | |  | `own_int_type_cd` | `CHAR(2)` | Participant Interest Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `OwnerInterestTypeName` |  | |  | `part_type_desc` | `CHAR(30)` | Participant Interest Type Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERINTERESTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Owner Interest Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOWNINTTYPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'OwnerInterestType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_OwnerInterestTypeText
  as select from oiu_cm_pintty_tx
{
  key own_int_type_cd as OwnerInterestType,
      @Semantics.language: true
  key spras           as Language,
      @Semantics.text: true
      part_type_desc  as OwnerInterestTypeName
}
```
