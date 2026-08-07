---
name: I_SLSPERFORMANCEPLANACTUALCUBE
description: Slsperformanceplanactualcube
app_component: SD-ANA-SP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - SD-ANA-SP
  - interface-view
  - analytical
  - component:SD-ANA-SP-2CL
  - lob:Sales & Distribution
---
# I_SLSPERFORMANCEPLANACTUALCUBE

**Slsperformanceplanactualcube**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesPlanItemUUID` | ✓ | |  |  |
| `SDDocument` | ✓ | |  |  |
| `SDDocumentItem` | ✓ | |  |  |
| `SalesDocumentType` |  | |  |  |
| `BillingDocumentType` |  | |  |  |
| `SDDocumentObject` |  | |  |  |
| `SalesPlanPurpose` |  | |  |  |
| `SalesPlanPeriodName` |  | |  |  |
| `SalesPerformanceDate` |  | |  |  |
| `SalesPerformanceYearMonth` |  | |  |  |
| `SlsPerformanceYearQuarter` |  | |  |  |
| `SalesPerformanceYear` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `SalesDistrict` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `CustomerGroup` |  | |  |  |
| `ShipToParty` |  | |  |  |
| `BillToParty` |  | |  |  |
| `PayerParty` |  | |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |
| `Division` |  | |  |  |
| `Product` |  | |  |  |
| `ProductGroup` |  | |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |
| `SalesEmployee` |  | |  | `cast( case when SalesEmployee is not null then SalesEmployee else '00000000' end as sales_empl )` |
| `Plant` |  | |  |  |
| `ShippingType` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `CostCenter` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `Country` |  | |  |  |
| `BillToPartyCountry` |  | |  |  |
| `Region` |  | |  |  |
| `BillToPartyRegion` |  | |  |  |
| `DisplayCurrency` |  | |  |  |
| `SalesPlanAmountInDspCrcy` |  | |  |  |
| `SalesPerfActlAmtInDspCurrency` |  | |  |  |
| `SalesPlanQuantity` |  | |  |  |
| `SalesPlanUnit` |  | |  | `cast(SalesPlanUnit as plan_unit)` |
| `SalesPerfActualQtyInBaseUnit` |  | |  |  |
| `BaseUnit` |  | |  | `cast (BaseUnit as meins)` |
| `SalesPerformanceActualQuantity` |  | |  |  |
| `SalesPerfActualQuantityUnit` |  | |  |  |
| `_SalesPlanPurpose` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_OrganizationDivision` | | ✓ | | |
| `_SalesOffice` | | ✓ | | |
| `_SalesGroup` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_CustomerGroup` | | ✓ | | |
| `_ShipToParty` | | ✓ | | |
| `_BillToParty` | | ✓ | | |
| `_PayerParty` | | ✓ | | |
| `_AdditionalCustomerGroup1` | | ✓ | | |
| `_AdditionalCustomerGroup2` | | ✓ | | |
| `_AdditionalCustomerGroup3` | | ✓ | | |
| `_AdditionalCustomerGroup4` | | ✓ | | |
| `_AdditionalCustomerGroup5` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_ProductGroup` | | ✓ | | |
| `_AdditionalMaterialGroup1` | | ✓ | | |
| `_AdditionalMaterialGroup2` | | ✓ | | |
| `_AdditionalMaterialGroup3` | | ✓ | | |
| `_AdditionalMaterialGroup4` | | ✓ | | |
| `_AdditionalMaterialGroup5` | | ✓ | | |
| `_SalesDistrict` | | ✓ | | |
| `_SalesEmployee_2` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_ShippingType` | | ✓ | | |
| `_ProfitCenter` | | ✓ | | |
| `_CostCenter` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_BusinessArea` | | ✓ | | |
| `_Country` | | ✓ | | |
| `_BillToPartyCountry` | | ✓ | | |
| `_Region` | | ✓ | | |
| `_BillToPartyRegion` | | ✓ | | |
| `_SalesPlanUnit` | | ✓ | | |
| `_BaseUnit` | | ✓ | | |
| `_SalesUnit` | | ✓ | | |
| `_SalesDocumentType` | | ✓ | | |
| `_BillingDocumentType` | | ✓ | | |
| `_DataSource` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesPlanPurpose` | `I_SalesPlanPurpose` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_OrganizationDivision` | `I_Division` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_PayerParty` | `I_Customer` | [0..1] |
| `_AdditionalCustomerGroup1` | `I_AdditionalCustomerGroup1` | [0..1] |
| `_AdditionalCustomerGroup2` | `I_AdditionalCustomerGroup2` | [0..1] |
| `_AdditionalCustomerGroup3` | `I_AdditionalCustomerGroup3` | [0..1] |
| `_AdditionalCustomerGroup4` | `I_AdditionalCustomerGroup4` | [0..1] |
| `_AdditionalCustomerGroup5` | `I_AdditionalCustomerGroup5` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_AdditionalMaterialGroup1` | `I_AdditionalMaterialGroup1` | [0..1] |
| `_AdditionalMaterialGroup2` | `I_AdditionalMaterialGroup2` | [0..1] |
| `_AdditionalMaterialGroup3` | `I_AdditionalMaterialGroup3` | [0..1] |
| `_AdditionalMaterialGroup4` | `I_AdditionalMaterialGroup4` | [0..1] |
| `_AdditionalMaterialGroup5` | `I_AdditionalMaterialGroup5` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_SalesEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_ShippingType` | `I_ShippingType` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_BillToPartyCountry` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_BillToPartyRegion` | `I_Region` | [0..1] |
| `_SalesPlanUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_DataSource` | `I_SalesPerformanceDataSource` | [0..1] |
| `_SPExtension` | `E_SalesPlanItem` | [1..1] |
| `_SDHExtension` | `E_SalesDocumentBasic` | [0..1] |
| `_SDIExtension` | `E_SalesDocumentItemBasic` | [0..1] |
| `_BDHExtension` | `E_BillingDocument` | [0..1] |
| `_BDIExtension` | `E_BillingDocumentItem` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Planned and Actual Sales Perf – Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'ISLSPERFPLNACTLC',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #D,
    sizeCategory:   #XL
  }
}
@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations:true
}
@Aggregation.allowPrecisionLoss:true

define view I_SlsPerformancePlanActualCube
  with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency,
    P_SalesPlan        : sales_plan,
    P_SalesPlanVersion : sales_plan_version,
    P_CreatedByUser    : sd_sp_createdbyuser
  as select from P_SalesPerformancePlanActual(
                 P_ExchangeRateType: $parameters.P_ExchangeRateType,
                 P_DisplayCurrency:  $parameters.P_DisplayCurrency,
                 P_SalesPlan: $parameters.P_SalesPlan,
                 P_SalesPlanVersion: $parameters.P_SalesPlanVersion,
                 P_CreatedByUser: $parameters.P_CreatedByUser
                 ) as PSP
  association [0..1] to I_SalesPlanPurpose           as _SalesPlanPurpose         on  $projection.SalesPlanPurpose = _SalesPlanPurpose.SalesPlanPurpose
  //  association [0..1] to I_User                     as _CreatedByUser            on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_SalesOrganization          as _SalesOrganization        on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel        as _DistributionChannel      on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                   as _OrganizationDivision     on  $projection.OrganizationDivision = _OrganizationDivision.Division
  association [0..1] to I_SalesOffice                as _SalesOffice              on  $projection.SalesOffice = _SalesOffice.SalesOffice
  association [0..1] to I_SalesGroup                 as _SalesGroup               on  $projection.SalesGroup = _SalesGroup.SalesGroup

  association [0..1] to I_Customer                   as _SoldToParty              on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_CustomerGroup              as _CustomerGroup            on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [0..1] to I_Customer                   as _ShipToParty              on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_Customer                   as _BillToParty              on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer                   as _PayerParty               on  $projection.PayerParty = _PayerParty.Customer
  association [0..1] to I_AdditionalCustomerGroup1   as _AdditionalCustomerGroup1 on  $projection.AdditionalCustomerGroup1 = _AdditionalCustomerGroup1.AdditionalCustomerGroup1
  association [0..1] to I_AdditionalCustomerGroup2   as _AdditionalCustomerGroup2 on  $projection.AdditionalCustomerGroup2 = _AdditionalCustomerGroup2.AdditionalCustomerGroup2
  association [0..1] to I_AdditionalCustomerGroup3   as _AdditionalCustomerGroup3 on  $projection.AdditionalCustomerGroup3 = _AdditionalCustomerGroup3.AdditionalCustomerGroup3
  association [0..1] to I_AdditionalCustomerGroup4   as _AdditionalCustomerGroup4 on  $projection.AdditionalCustomerGroup4 = _AdditionalCustomerGroup4.AdditionalCustomerGroup4
  association [0..1] to I_AdditionalCustomerGroup5   as _AdditionalCustomerGroup5 on  $projection.AdditionalCustomerGroup5 = _AdditionalCustomerGroup5.AdditionalCustomerGroup5

  association [0..1] to I_Division                   as _Division                 on  $projection.Division = _Division.Division
  association [0..1] to I_Product                    as _Product                  on  $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup_2             as _ProductGroup             on  $projection.ProductGroup = _ProductGroup.ProductGroup
  association [0..1] to I_AdditionalMaterialGroup1   as _AdditionalMaterialGroup1 on  $projection.AdditionalMaterialGroup1 = _AdditionalMaterialGroup1.AdditionalMaterialGroup1
  association [0..1] to I_AdditionalMaterialGroup2   as _AdditionalMaterialGroup2 on  $projection.AdditionalMaterialGroup2 = _AdditionalMaterialGroup2.AdditionalMaterialGroup2
  association [0..1] to I_AdditionalMaterialGroup3   as _AdditionalMaterialGroup3 on  $projection.AdditionalMaterialGroup3 = _AdditionalMaterialGroup3.AdditionalMaterialGroup3
  association [0..1] to I_AdditionalMaterialGroup4   as _AdditionalMaterialGroup4 on  $projection.AdditionalMaterialGroup4 = _AdditionalMaterialGroup4.AdditionalMaterialGroup4
  association [0..1] to I_AdditionalMaterialGroup5   as _AdditionalMaterialGroup5 on  $projection.AdditionalMaterialGroup5 = _AdditionalMaterialGroup5.AdditionalMaterialGroup5
  association [0..1] to I_SalesDistrict              as _SalesDistrict            on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_PersonWorkAgreement_1      as _SalesEmployee_2          on  $projection.SalesEmployee = _SalesEmployee_2.PersonWorkAgreement
  association [0..1] to I_Plant                      as _Plant                    on  $projection.Plant = _Plant.Plant
  association [0..1] to I_ShippingType               as _ShippingType             on  $projection.ShippingType = _ShippingType.ShippingType
  association [0..*] to I_ProfitCenter               as _ProfitCenter             on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                                  and $projection.ControllingArea = _ProfitCenter.ControllingArea
  association [0..*] to I_CostCenter                 as _CostCenter               on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                  and $projection.ControllingArea = _CostCenter.ControllingArea
  association [0..1] to I_CompanyCode                as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea            as _ControllingArea          on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_BusinessArea               as _BusinessArea             on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_Country                    as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_Country                    as _BillToPartyCountry       on  $projection.BillToPartyCountry = _BillToPartyCountry.Country
  association [0..1] to I_Region                     as _Region                   on  $projection.Region  = _Region.Region
                                                                                  and $projection.Country = _Region.Country
  association [0..1] to I_Region                     as _BillToPartyRegion        on  $projection.BillToPartyRegion  = _BillToPartyRegion.Region
                                                                                  and $projection.BillToPartyCountry = _BillToPartyRegion.Country
  association [0..1] to I_UnitOfMeasure              as _SalesPlanUnit            on  $projection.SalesPlanUnit = _SalesPlanUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _SalesUnit                on  $projection.SalesPerfActualQuantityUnit = _SalesUnit.UnitOfMeasure
  association [0..1] to I_SalesDocumentType          as _SalesDocumentType        on  $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType
  association [0..1] to I_BillingDocumentType        as _BillingDocumentType      on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType
  association [0..1] to I_SalesPerformanceDataSource as _DataSource               on  $projection.SDDocumentObject = _DataSource.SalesPerformanceDataSource

  //Extensibility
  association [1..1] to E_SalesPlanItem              as _SPExtension              on  $projection.SalesPlanItemUUID = _SPExtension.SalesPlanItemUUID

  association [0..1] to E_SalesDocumentBasic         as _SDHExtension             on  $projection.SDDocument = _SDHExtension.SalesDocument
  association [0..1] to E_SalesDocumentItemBasic     as _SDIExtension             on  $projection.SDDocument     = _SDIExtension.SalesDocument
                                                                                  and $projection.SDDocumentItem = _SDIExtension.SalesDocumentItem
  association [0..1] to E_BillingDocument            as _BDHExtension             on  $projection.SDDocument = _BDHExtension.BillingDocument
  association [0..1] to E_BillingDocumentItem        as _BDIExtension             on  $projection.SDDocument     = _BDIExtension.BillingDocument
                                                                                  and $projection.SDDocumentItem = _BDIExtension.BillingDocumentItem
{
  key SalesPlanItemUUID,
  key SDDocument,
  key SDDocumentItem,

      @ObjectModel.foreignKey.association: '_SalesDocumentType'
      SalesDocumentType,
      _SalesDocumentType,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      BillingDocumentType,
      _BillingDocumentType,
      @ObjectModel.foreignKey.association: '_DataSource'
      SDDocumentObject,
      _DataSource,

      //SalesPlan,
      //SalesPlanVersion,
      //@ObjectModel.foreignKey.association: '_CreatedByUser'
      //CreatedByUser,
      //_CreatedByUser,
      @ObjectModel.foreignKey.association: '_SalesPlanPurpose'
      SalesPlanPurpose,
      _SalesPlanPurpose,
      
      SalesPlanPeriodName,
      SalesPerformanceDate,
      @Semantics.calendar.yearMonth
      SalesPerformanceYearMonth,
      @Semantics.calendar.yearQuarter
      SlsPerformanceYearQuarter,
      @Semantics.calendar.year
      SalesPerformanceYear,

      //Organization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      _SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      _DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      _OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      _SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      _SalesGroup,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      _SalesDistrict,

      //Customer
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      _SoldToParty,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      _CustomerGroup,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      _ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      _BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      _PayerParty,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      AdditionalCustomerGroup1,
      _AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      AdditionalCustomerGroup2,
      _AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      AdditionalCustomerGroup3,
      _AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      AdditionalCustomerGroup4,
      _AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      AdditionalCustomerGroup5,
      _AdditionalCustomerGroup5,

      //Product
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      _Division,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      _Product,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      _ProductGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      AdditionalMaterialGroup1,
      _AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      AdditionalMaterialGroup2,
      _AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      AdditionalMaterialGroup3,
      _AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      AdditionalMaterialGroup4,
      _AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      AdditionalMaterialGroup5,
      _AdditionalMaterialGroup5,

      //Employee
      @ObjectModel.foreignKey.association: '_SalesEmployee_2'
      cast(
        case when SalesEmployee is not null
        then SalesEmployee
        else '00000000'
      end as sales_empl )              as SalesEmployee,
      _SalesEmployee_2,

      //Shipping
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      _Plant,
      @ObjectModel.foreignKey.association: '_ShippingType'
      ShippingType,
      _ShippingType,

      //Cost
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      _ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      _CostCenter,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      _CompanyCode,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      _ControllingArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      _BusinessArea,

      //Geography
      @ObjectModel.foreignKey.association: '_Country'
      Country,
      _Country,
      @ObjectModel.foreignKey.association: '_BillToPartyCountry'
      BillToPartyCountry,
      _BillToPartyCountry,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      _Region,
      @ObjectModel.foreignKey.association: '_BillToPartyRegion'
      BillToPartyRegion,
      _BillToPartyRegion,

      @Semantics.currencyCode: true
      DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SalesPlanAmountInDspCrcy,

      //      @DefaultAggregation: #SUM
      //      @Semantics.amount.currencyCode: 'DisplayCurrency'
      //      NetAmountInDisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SalesPerfActlAmtInDspCurrency,

      //      @DefaultAggregation: #SUM
      //      @Semantics.amount.currencyCode: 'DisplayCurrency'
      //      NetSlsVolumeNetAmtInDC,

      //Planned Quantity
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SalesPlanUnit'
      SalesPlanQuantity,
      @ObjectModel.foreignKey.association: '_SalesPlanUnit'
      @Semantics.unitOfMeasure: true
      cast(SalesPlanUnit as plan_unit) as SalesPlanUnit,
      _SalesPlanUnit,

      //Actual Quantity
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesPerfActualQtyInBaseUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      cast (BaseUnit as meins)         as BaseUnit,
      _BaseUnit,

      //Actual Quantity in sales unit
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SalesPerfActualQuantityUnit'
      SalesPerformanceActualQuantity,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      @Semantics.unitOfMeasure: true
      SalesPerfActualQuantityUnit,
      _SalesUnit
}
```
