---
name: C_QUALITYCERTIFICATEEMAIL
description: "Quality Certificate Email"
app_component: QM-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_QUALITYCERTIFICATEEMAIL')/$value
semantic_en: "Quality Certificate Email"
semantic_vi: "Quality Certificate Email — CDS view tiêu dùng dựa trên I_DeliveryDocumentItem."
keywords:
  - "quality"
  - "certificate"
  - "email"
  - "delivery"
  - "document"
  - "item"
  - "sales"
  - "organization"
  - "shipping"
  - "point"
  - "ship"
  - "party"
tags:
  - QM
  - bo:companycode
  - component:QM-CA-2CL
  - consumption-view
  - lob:cross_application components
  - lob:quality management
  - QM-CA
  - QM-CA-2CL
---
# C_QUALITYCERTIFICATEEMAIL

**Quality Certificate Email**

| Property | Value |
|---|---|
| App Component | `QM-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_QUALITYCERTIFICATEEMAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` | ✓ | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` | ✓ | |  |  | `NUMC(6)` | Delivery Item |
| `SalesOrganization` |  | | `_DeliveryDocument` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `ShippingPoint` |  | | `_DeliveryDocument` | `ShippingPoint` | `CHAR(4)` | Shipping Point / Receiving Point |
| `ShipToParty` |  | | `_DeliveryDocument` | `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `SoldToParty` |  | | `_DeliveryDocument` | `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `DeliveryDocumentType` |  | | `_DeliveryDocument` | `DeliveryDocumentType` | `CHAR(4)` | Delivery Type |
| `OverallGoodsMovementStatus` |  | | `_DeliveryDocument` | `OverallGoodsMovementStatus` | `CHAR(1)` | Goods Movement Status (All Items) |
| `OverallPickingStatus` |  | | `_DeliveryDocument` | `OverallPickingStatus` | `CHAR(1)` | Picking Status/Putaway Status (All Items) |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialByCustomer` |  | |  |  | `CHAR(35)` | Customer Material |
| `MaterialTypePrimary` |  | |  |  | `CHAR(4)` | Material Type |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `DeliveryDocumentItemCategory` |  | |  |  | `CHAR(4)` | Delivery Item Category |
| `_DeliveryDocument` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_QUALITYCERTIFICATEEMAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_QUALITYCERTIFICATEEMAIL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CQLTYCERTEMAIL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Quality Certificate Email'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@DataAging.noAgingRestriction: false
@ObjectModel.supportedCapabilities:
    [ #OUTPUT_EMAIL_DATA_PROVIDER ]

define view C_QualityCertificateEmail
  as select from I_DeliveryDocumentItem
{

  key DeliveryDocument,
  key DeliveryDocumentItem,

      _DeliveryDocument.SalesOrganization,
      _DeliveryDocument.ShippingPoint,
      _DeliveryDocument.ShipToParty,
      _DeliveryDocument.SoldToParty,
      _DeliveryDocument.DeliveryDocumentType,
      _DeliveryDocument.OverallGoodsMovementStatus,
      _DeliveryDocument.OverallPickingStatus,

      DistributionChannel,
      Division,
      MaterialGroup,
      Material,
      MaterialByCustomer,
      MaterialTypePrimary,
      SDDocumentCategory,
      Plant,
      DeliveryDocumentItemCategory,

      _DeliveryDocument,
      _DeliveryDocument._SalesOrganization,
      _DistributionChannel,
      _Division,
      _Material,
      _MaterialGroup,
      _DeliveryDocument._ShipToParty,
      _DeliveryDocument._SoldToParty,
      _DeliveryDocument._DeliveryDocumentType,
      _DeliveryDocument._OverallGoodsMovementStatus,
      _DeliveryDocument._OverallPickingStatus,
      _Plant,
      _DeliveryDocument._ShippingPoint,
      _SDDocumentCategory,
      _ItemCategory

}
```
