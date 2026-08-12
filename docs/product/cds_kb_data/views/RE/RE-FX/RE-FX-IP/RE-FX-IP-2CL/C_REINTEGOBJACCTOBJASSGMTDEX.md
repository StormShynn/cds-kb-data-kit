---
name: C_REINTEGOBJACCTOBJASSGMTDEX
description: "Extractor for REIntegObjectAcctObjAssgmt"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINTEGOBJACCTOBJASSGMTDEX')/$value
semantic_en: "Extractor for REIntegObjectAcctObjAssgmt"
semantic_vi: "Extractor for REIntegObjectAcctObjAssgmt — CDS view tiêu dùng dựa trên I_REIntegObjectAcctObjAssgmt."
keywords:
  - "extractor"
  - "for"
  - "reintegobjectacctobjassgmt"
  - "internal"
  - "real"
  - "estate"
  - "number"
  - "accounting"
  - "object"
  - "validity"
  - "date"
  - "start"
  - "status"
  - "source"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# C_REINTEGOBJACCTOBJASSGMTDEX

**Extractor for REIntegObjectAcctObjAssgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINTEGOBJACCTOBJASSGMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REAccountingObject` | ✓ | |  |  | `CHAR(22)` | Object Number |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `REStatusObjectSource` |  | |  |  | `CHAR(22)` | Object Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `REAccountingObjectType` |  | |  |  | `CHAR(2)` | Object Type |
| `REOnlyInfoAssgmt` |  | |  |  | `CHAR(1)` | Informational Assignment |
| `REIsLeadingObject` |  | |  |  | `CHAR(1)` | Leading object Indicator |
| `REIntegObjSpaceGroupType` |  | |  |  | `CHAR(4)` | Group Type |
| `REParentIntegObjectType` |  | |  |  | `CHAR(4)` | Parent Object Type |
| `REParentIntegObjectExternalID` |  | |  |  | `CHAR(45)` | Parent External Identification |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `InternalOrder` |  | |  |  | `CHAR(12)` | Internal Order |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_REObjectTypeDetails` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINTEGOBJACCTOBJASSGMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINTEGOBJACCTOBJASSGMTDEX')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CREINTOBJACCASS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@ObjectModel.semanticKey: ['InternalRealEstateNumber']
@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction.enabled: true,
  internalName:#LOCAL 
}

@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true 

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: #EXTRACTION_DATA_SOURCE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@EndUserText.label: 'Extractor for REIntegObjectAcctObjAssgmt'
define view C_REIntegObjAcctObjAssgmtDEX as select from I_REIntegObjectAcctObjAssgmt {
  key InternalRealEstateNumber,
  key REAccountingObject,
  key ValidityEndDate,
  ValidityStartDate,
  REStatusObjectSource,
  CompanyCode,
  REAccountingObjectType,
  REOnlyInfoAssgmt,
  REIsLeadingObject,
  REIntegObjSpaceGroupType,
  REParentIntegObjectType,
  REParentIntegObjectExternalID,
  CostCenter,
  InternalOrder,
  OrderType,
  ControllingArea,
  ProfitCenter,
  /* Associations */
  _CompanyCode,
  _CostCenter,
  _InternalOrder,
  _REObjectTypeDetails,
  _WBSElement
}
```
