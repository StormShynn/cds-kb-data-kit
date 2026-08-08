---
name: I_SALESSCHEDGAGRMTITEMCUBE
description: "Salesschedgagrmtitemcube"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - analytical
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTITEMCUBE

**Salesschedgagrmtitemcube**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedulingAgreement` | ✓ | |  |  |  |  |
| `SalesSchedulingAgreementItem` | ✓ | |  |  |  |  |
| `SchedulingAgreementReleaseType` | ✓ | |  |  |  |  |
| `SalesSchedgAgrmtType` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreationDateYear` |  | |  | `cast(CalendarDate.CalendarYear as creation_date_year)` |  |  |
| `CreationDateYearQuarter` |  | |  | `cast(CalendarDate.YearQuarter as creation_date_year_quarter)` |  |  |
| `CreationDateYearMonth` |  | |  | `cast(CalendarDate.YearMonth as creation_date_year_month)` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `PartnerCompany` |  | |  | `TradingPartner` |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `ShipToParty` |  | |  | `cast(coalesce(ItemPartner.ShipToParty, HeaderPartner.ShipToParty) as kunwe)` |  |  |
| `BillToParty` |  | |  | `cast(coalesce(ItemPartner.BillToParty, HeaderPartner.BillToParty) as kunre)` |  |  |
| `PayerParty` |  | |  | `cast(coalesce(ItemPartner.PayerParty, HeaderPartner.PayerParty) as kunrg)` |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Product` |  | |  | `cast( SalesSchedgAgrmtItem.Material as productnumber preserving type )` |  |  |
| `ProductGroup` |  | |  | `cast( SalesSchedgAgrmtItem.MaterialGroup as productgroup preserving type )` |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `CustomerFiscalYear` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `CumulativeDeliveredQuantity` |  | |  |  |  |  |
| `CumulativeIssuedQuantity` |  | |  |  |  |  |
| `CumulativeReceiptQuantity` |  | |  |  |  |  |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_PayerParty` | `I_Customer` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Scheduling Agreement Item - Cube'
@VDM.viewType: #COMPOSITE

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@AbapCatalog: {
  sqlViewName: 'ISDSCHEDGAGRMTIC',
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
@ObjectModel.supportedCapabilities: 
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_SalesSchedgAgrmtItemCube
  as select from I_SalesSchedgAgrmtItem as SalesSchedgAgrmtItem
  left outer to many join I_SalesSchedgAgrmtDelivSched as SalesSchedgAgrmtDelivSched on SalesSchedgAgrmtItem.SalesSchedulingAgreement = SalesSchedgAgrmtDelivSched.SalesSchedulingAgreement
                                                                                    and SalesSchedgAgrmtItem.SalesSchedulingAgreementItem = SalesSchedgAgrmtDelivSched.SalesSchedulingAgreementItem
                                                                                    and SalesSchedgAgrmtDelivSched.IntDeliveryScheduleNumber = '0000'
  left outer to one join I_SalesSchedgAgrmtCumltvQty  as SalesSchedgAgrmtCumltvQty   on SalesSchedgAgrmtItem.SalesSchedulingAgreement = SalesSchedgAgrmtCumltvQty.SalesSchedulingAgreement
                                                                                    and SalesSchedgAgrmtItem.SalesSchedulingAgreementItem = SalesSchedgAgrmtCumltvQty.SalesSchedulingAgreementItem
                                                                                    and SalesSchedgAgrmtDelivSched.CustomerFiscalYear = SalesSchedgAgrmtCumltvQty.CurrentFiscalYear
  left outer to one join I_SDDocStandardPartner       as HeaderPartner               on SalesSchedgAgrmtItem.SalesSchedulingAgreement = HeaderPartner.SDDocument
  left outer to one join I_SDDocItemStandardPartner   as ItemPartner                 on SalesSchedgAgrmtItem.SalesSchedulingAgreement = ItemPartner.SDDocument
                                                                                    and SalesSchedgAgrmtItem.SalesSchedulingAgreementItem = ItemPartner.SDDocumentItem
  left outer to one join I_CalendarDate               as CalendarDate                on SalesSchedgAgrmtItem.CreationDate = CalendarDate.CalendarDate
                                                                                    
  //Association                                                                                
  association [0..1] to I_Customer                    as _ShipToParty                on $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_Customer                    as _BillToParty                on $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer                    as _PayerParty                 on $projection.PayerParty  = _PayerParty.Customer
  association [0..1] to I_Product                     as _Product                    on $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup_2              as _ProductGroup               on $projection.ProductGroup = _ProductGroup.ProductGroup       
  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic      as _Extension                  on $projection.SalesSchedulingAgreement     = _Extension.SalesDocument
                                                                                    and $projection.SalesSchedulingAgreementItem = _Extension.SalesDocumentItem
{
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmt'
  key SalesSchedgAgrmtItem.SalesSchedulingAgreement             as SalesSchedulingAgreement,
  key SalesSchedgAgrmtItem.SalesSchedulingAgreementItem         as SalesSchedulingAgreementItem,
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtRelType'
  key SalesSchedgAgrmtDelivSched.SchedulingAgreementReleaseType as SchedulingAgreementReleaseType,
      
      SalesSchedgAgrmtItem._SalesSchedgAgrmt,
      SalesSchedgAgrmtDelivSched._SalesSchedgAgrmtRelType,
      
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.SalesSchedgAgrmtType,
      
      //Admin
      @Semantics.systemDate.lastChangedAt: true
      SalesSchedgAgrmtItem.LastChangeDate,
      SalesSchedgAgrmtItem.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      SalesSchedgAgrmtItem.CreationDate,
      SalesSchedgAgrmtItem.CreationTime,
      @Semantics.calendar.year
      cast(CalendarDate.CalendarYear as creation_date_year) as CreationDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDate.YearQuarter as creation_date_year_quarter) as CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDate.YearMonth as creation_date_year_month) as CreationDateYearMonth,
      
      //Organization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.SalesOrganization,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.DistributionChannel,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.OrganizationDivision,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.SalesOffice,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.SalesGroup,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._SalesGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._SoldToParty.TradingPartner as PartnerCompany,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._SoldToParty._GlobalCompany,
      
      //Partner
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.SoldToParty,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._SoldToParty,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.CustomerGroup,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._CustomerGroup,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      cast(coalesce(ItemPartner.ShipToParty, HeaderPartner.ShipToParty) as kunwe) as ShipToParty,
      _ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      cast(coalesce(ItemPartner.BillToParty, HeaderPartner.BillToParty) as kunre) as BillToParty,
      _BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      cast(coalesce(ItemPartner.PayerParty,  HeaderPartner.PayerParty)  as kunrg) as PayerParty,
      _PayerParty,
      
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.AdditionalCustomerGroup1,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.AdditionalCustomerGroup2,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.AdditionalCustomerGroup3,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.AdditionalCustomerGroup4,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.AdditionalCustomerGroup5,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._AdditionalCustomerGroup5,
      
      //Product
      SalesSchedgAgrmtItem.MaterialByCustomer,
      @ObjectModel.foreignKey.association: '_Division'
      SalesSchedgAgrmtItem.Division,
      SalesSchedgAgrmtItem._Division,
      @ObjectModel.foreignKey.association: '_Plant'
      SalesSchedgAgrmtItem.Plant,
      SalesSchedgAgrmtItem._Plant,
      @ObjectModel.foreignKey.association: '_Product'     
      cast( SalesSchedgAgrmtItem.Material as productnumber preserving type )   as Product,
      _Product,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProductGroup'
      cast( SalesSchedgAgrmtItem.MaterialGroup as productgroup preserving type ) as ProductGroup,
      _ProductGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      SalesSchedgAgrmtItem.AdditionalMaterialGroup1,
      SalesSchedgAgrmtItem._AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      SalesSchedgAgrmtItem.AdditionalMaterialGroup2,
      SalesSchedgAgrmtItem._AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      SalesSchedgAgrmtItem.AdditionalMaterialGroup3,
      SalesSchedgAgrmtItem._AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      SalesSchedgAgrmtItem.AdditionalMaterialGroup4,
      SalesSchedgAgrmtItem._AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      SalesSchedgAgrmtItem.AdditionalMaterialGroup5,
      SalesSchedgAgrmtItem._AdditionalMaterialGroup5,
  
      //Other
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.BillingCompanyCode,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._BillingCompanyCode,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesSchedgAgrmtItem._SalesSchedgAgrmt.SalesDistrict,
      SalesSchedgAgrmtItem._SalesSchedgAgrmt._SalesDistrict,
      
      SalesSchedgAgrmtDelivSched.CustomerFiscalYear,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      SalesSchedgAgrmtItem.OrderQuantityUnit,
      SalesSchedgAgrmtItem._OrderQuantityUnit,
      @Analytics.internalName: #LOCAL
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      SalesSchedgAgrmtItem.BaseUnit,
      SalesSchedgAgrmtItem._BaseUnit,
   
      //KPIs
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesSchedgAgrmtCumltvQty.CumulativeDeliveredQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesSchedgAgrmtCumltvQty.CumulativeIssuedQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesSchedgAgrmtDelivSched.CumulativeReceiptQuantity
      
      //BOM
      //MainItemPricingRefProduct,
      //HigherLevelItem,
      //cast (BillOfMaterial as bill_of_matrl) as BillOfMaterial,
      //_ItemCategory.PropagatePrftbltySgmt2BOM,
      //_ItemCategory.CostDeterminationIsRequired
}
```
