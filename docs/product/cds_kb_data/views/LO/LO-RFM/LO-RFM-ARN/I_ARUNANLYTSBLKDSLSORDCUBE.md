---
name: I_ARUNANLYTSBLKDSLSORDCUBE
description: "Blocked Sales Orders - Cube"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSBLKDSLSORDCUBE')/$value
semantic_en: "Blocked Sales Orders - Cube"
semantic_vi: "Blocked Sales Orders - Cube — CDS view tổng hợp dựa trên I_SupAssgmtBlkdSlsOrdItmsC."
keywords:
  - "blocked"
  - "sales"
  - "orders"
  - "cube"
  - "requirement"
  - "document"
  - "number"
  - "item"
  - "issue"
  - "name"
  - "category"
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
---
# I_ARUNANLYTSBLKDSLSORDCUBE

**Blocked Sales Orders - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSBLKDSLSORDCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `Issue` | ✓ | |  |  | `CHAR(4)` | Issue |
| `IssueName` |  | | `_Issue` | `IssueName` | `CHAR(60)` | Short Text for Fixed Values |
| `IssueCategory` |  | |  |  | `CHAR(5)` | Issue Category |
| `NumberOfSalesOrderItems` |  | |  |  | `INT4(10)` | Item Issues in Order |
| `ARunDocumentItemUniqueID` |  | |  |  | `CHAR(17)` | Unique Identification for Supply Assignment Document Item |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` |  |
| `RequirementType` |  | |  |  | `CHAR(2)` |  |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotActualAmtInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `_SalesDist` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Rqmt` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Issue` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDist` | `I_SalesDistrict` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_SalesOrg` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Rqmt` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_Issue` | `I_RFM_SlsOrdIssueText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSBLKDSLSORDCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSBLKDSLSORDCUBE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {
  dataCategory: #CUBE,
  internalName:#LOCAL
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'IARNALYSTBLKSO',
  compiler.compareFilter: true,
  preserveKey:true
 }
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: #ANALYTICAL_CUBE
}
@Metadata:{
  allowExtensions:              true
//  ,ignorePropagatedAnnotations:  true
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Blocked Sales Orders - Cube'
define view I_ARunAnlytsBlkdSlsOrdCube
  with parameters
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_SupAssgmtBlkdSlsOrdItmsC(
                                     P_DisplayCurrency: $parameters.P_DisplayCurrency
                                     ) as Demand
  association [0..1] to I_SalesDistrict         as _SalesDist           on $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_CompanyCode           as _CompanyCode         on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer              as _Customer            on $projection.Customer = _Customer.Customer
  association [0..1] to I_SalesOrganization     as _SalesOrg            on $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel   as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_SupDmndAllDocRqmtType as _Rqmt                on $projection.RequirementType = _Rqmt.RequirementType
  association [0..1] to I_Plant                 as _Plant               on $projection.Plant = _Plant.Plant
  association [0..1] to I_ProductGroup          as _ProductGroup        on $projection.MaterialGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_RFM_SlsOrdIssueText   as _Issue               on $projection.Issue = _Issue.Issue
{
      //Demand
      @EndUserText.label: 'Requirement Document Number'
  key RequirementDocumentNumber,
      @EndUserText.label: 'Requirement Document Item'
  key RequirementDocumentItem,

  key Issue,
      @EndUserText.label: 'Issue'
      _Issue.IssueName,
      IssueCategory,
      @EndUserText.label: 'Number of Sales Order Items'
      @DefaultAggregation: #SUM
      NumberOfSalesOrderItems,
      @EndUserText.label: 'Requirement Document/Item'
      ARunDocumentItemUniqueID,
      @EndUserText.label: 'Requested Delivery Date'
      RequestedDeliveryDate,
      @EndUserText.label: 'Requirement Type'
      RequirementType,
      @EndUserText.label: 'Product'
      Demand.Material,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      MaterialGroup,
      MaterialType,
      CrossPlantConfigurableProduct,
      @ObjectModel.foreignKey.association: '_SalesOrg'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      Division,
      @ObjectModel.foreignKey.association: '_SalesDist'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      RequirementSegment,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      DisplayCurrency,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Amount'
      TotActualAmtInDisplayCurrency,
      /* Associations */
      //Demand
      _DisplayCurrency,
      _Plant,
      _CompanyCode,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Customer,
      _DistributionChannel,
      _ProductGroup,
      _Rqmt,
      _SalesOrg,
      _SalesDist,
      _Issue
}
```
