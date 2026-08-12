---
name: I_ARUNANLYTSSLSORDRETCUBE
description: "Sales Order Returns - Cube"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDRETCUBE')/$value
semantic_en: "Sales Order Returns - Cube"
semantic_vi: "Sales Order Returns - Cube — CDS view tổng hợp dựa trên I_ARunAnlytsSalesReturns."
keywords:
  - "sales"
  - "order"
  - "returns"
  - "cube"
  - "requirement"
  - "document"
  - "number"
  - "item"
  - "supply"
  - "schedule"
  - "line"
  - "assigned"
  - "type"
  - "assgmt"
  - "source"
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
# I_ARUNANLYTSSLSORDRETCUBE

**Sales Order Returns - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDRETCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `SupplyScheduleLine` | ✓ | |  |  | `NUMC(4)` | Schedule Line Number |
| `AssignedSupplyType` |  | |  |  | `CHAR(1)` |  |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` |  |
| `SupplyDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `TotalQuantity` |  | |  |  | `QUAN(15)` | Overall confirmed sales order schedule lines: quantity |
| `OpenSupplyQuantity` |  | |  |  | `QUAN(16)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `OrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `StockSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `NetAmount` |  | |  | `cast(currency_conversion( amount => NetAmount, source_currency => DocumentCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => cast($session.system_date as abap.dats), round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true, error_handling => 'SET_TO_NULL' )as net_amount_in_dsp_crcy)` | `CURR(19)` | Net Value in Display Currency |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `NmbrOfItemsInOrder` |  | |  | `cast( 1 as item_issues )` | `INT4(10)` | Item Issues in Order |
| `_DisplayCurrency` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_DistrChnl` | | ✓ | | | | |
| `_Divn` | | ✓ | | | | |
| `_SalesDist` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_SalesDocumentRjcnReason` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductType` | `I_Producttype` | [0..1] |
| `_SalesOrg` | `I_SalesOrganization` | [0..1] |
| `_DistrChnl` | `I_DistributionChannel` | [0..1] |
| `_Divn` | `I_Division` | [0..1] |
| `_SalesDist` | `I_SalesDistrict` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesDocumentRjcnReason` | `I_SalesDocumentRjcnReason` | [0..1] |
| `_SDDocumentReason` | `I_SDDocumentReason` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDRETCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDRETCUBE')/$value)*

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
  sqlViewName: 'IARNALYSSORETC',
  compiler.compareFilter: true,
  preserveKey:true
 }
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   modelingPattern: #ANALYTICAL_CUBE
}
@Metadata:{
  allowExtensions:              true,
  ignorePropagatedAnnotations:  true
}
@EndUserText.label: 'Sales Order Returns - Cube'
define view I_ARunAnlytsSlsOrdRetCube
  with parameters
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_ARunAnlytsSalesReturns
  association [0..1] to I_Currency                as _DisplayCurrency         on $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [0..1] to I_Product                 as _Product                 on $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup            as _ProductGroup            on $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_Producttype             as _ProductType             on $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_SalesOrganization       as _SalesOrg                on $projection.SalesOrganization = _SalesOrg.SalesOrganization
  association [0..1] to I_DistributionChannel     as _DistrChnl               on $projection.DistributionChannel = _DistrChnl.DistributionChannel
  association [0..1] to I_Division                as _Divn                    on $projection.Division = _Divn.Division
  association [0..1] to I_SalesDistrict           as _SalesDist               on $projection.SalesDistrict = _SalesDist.SalesDistrict
  association [0..1] to I_Plant                   as _Plant                   on $projection.Plant = _Plant.Plant
  association [0..1] to I_CompanyCode             as _CompanyCode             on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer                as _Customer                on $projection.Customer = _Customer.Customer
  association [0..1] to I_UnitOfMeasure           as _BaseUnit                on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_SalesDocumentRjcnReason as _SalesDocumentRjcnReason on $projection.SalesDocumentRjcnReason = _SalesDocumentRjcnReason.SalesDocumentRjcnReason
  association [0..1] to I_SDDocumentReason        as _SDDocumentReason        on $projection.SDDocumentReason = _SDDocumentReason.SDDocumentReason
{
  key   RequirementDocumentNumber,
  key   RequirementDocumentItem,
  key   SupplyScheduleLine,
        AssignedSupplyType,
        SupAssgmtSource,
        SupplyDeliveryDate,
        ProductAvailabilityDate,
        RequestedDeliveryDate,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        @DefaultAggregation: #SUM
        TotalQuantity,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        @DefaultAggregation: #SUM
        OpenSupplyQuantity,
        @Semantics.unitOfMeasure: true
        BaseUnit,
        @ObjectModel.foreignKey.association: '_Product'
        Product,
        @ObjectModel.foreignKey.association: '_ProductGroup'
        ProductGroup,
        @ObjectModel.foreignKey.association: '_Plant'
        Plant,
        OrderType,
        @ObjectModel.foreignKey.association: '_ProductType'
        ProductType,
        StockSegment,
        @EndUserText.label: 'Generic Article'
        CrossPlantConfigurableProduct,
        @ObjectModel.foreignKey.association: '_SalesOrg'
        SalesOrganization,
        @ObjectModel.foreignKey.association: '_DistrChnl'
        DistributionChannel,
        @ObjectModel.foreignKey.association: '_Divn'
        Division,
        @ObjectModel.foreignKey.association: '_SalesDist'
        SalesDistrict,
        PurchasingOrganization,
        PurchasingGroup,
        Batch,
        StorageLocation,
        @ObjectModel.foreignKey.association: '_Customer'
        Customer,
        @ObjectModel.foreignKey.association: '_CompanyCode'
        CompanyCode,
        @ObjectModel.foreignKey.association: '_SDDocumentReason'
        SDDocumentReason,
        @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
        SalesDocumentRjcnReason,
        @Semantics.amount.currencyCode: 'DocumentCurrency'
        NetPriceAmount,
        @Semantics.currencyCode: true
        @ObjectModel.foreignKey.association: '_DisplayCurrency'
        cast(:P_DisplayCurrency as vdm_v_display_currency) as DisplayCurrency,
        @Semantics.amount.currencyCode: 'DisplayCurrency'
        @DefaultAggregation: #SUM
        cast(currency_conversion(
          amount => NetAmount,
          source_currency => DocumentCurrency,
          target_currency => :P_DisplayCurrency,
          exchange_rate_date => cast($session.system_date as abap.dats),
          round => #CDSBoolean.true,
          decimal_shift => #CDSBoolean.true,
          decimal_shift_back => #CDSBoolean.true,
          error_handling => 'SET_TO_NULL'
        )as net_amount_in_dsp_crcy)                        as NetAmount,
        @Semantics.currencyCode: true
        DocumentCurrency,
        @DefaultAggregation: #SUM
        cast( 1 as item_issues )                           as NmbrOfItemsInOrder,
        //associations
        _SalesDocument,
        _SalesDocumentItem,
        _Product,
        _ProductGroup,
        _ProductType,
        _SalesOrg,
        _DistrChnl,
        _Divn,
        _SalesDist,
        _Plant,
        _CompanyCode,
        @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
        _Customer,
        _BaseUnit,
        _DisplayCurrency,
        _SalesDocumentRjcnReason,
        _SDDocumentReason
}
```
