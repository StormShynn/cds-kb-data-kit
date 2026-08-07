---
name: C_POWTHNONCMPLNCPAYTTRM
description: Powthnoncmplncpayttrm
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_POWTHNONCMPLNCPAYTTRM

**Powthnoncmplncpayttrm**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `UniqueIntSourcingRequest` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `SupplierCountry` |  | |  | `cast( _Supplier.Country as mm_a_supplier_country )` |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `CalendarYear` |  | | `_Calendar` | `CalendarYear` |  |  |
| `MinNrOfPOWithNonCompPaytTrm` |  | |  | `NrOfPOWithNonCompliantPaytTrm` |  |  |
| `NrOfPOWithNonCompliantPaytTrm` |  | |  |  |  |  |
| `NumberOfPurchaseOrders` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurords )` |  |  |
| `PurOrdNetAmountInDisplayCrcy` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast( :P_DisplayCurrency as displaycurrency preserving type )` |  |  |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Calendar` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_MaterialGroup` | `I_ProductGroup_2` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Calendar` | `I_CalendarDate` | [1..1] |
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPOPAYTCBE'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'PO having Non compliant Payment Terms'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@OData.publish: true
@Analytics.dataCategory: #CUBE
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #XL
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL 
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@AbapCatalog.preserveKey:true 


define view C_POWthNonCmplncPaytTrm 
with parameters
    P_StartDate       : vdm_validitystart ,
    P_EndDate         :  vdm_validityend ,
    P_DisplayCurrency           : displaycurrency
    
   as select from P_PurOrdWithNonCmplncPaytTrm1 ( P_StartDate  : $parameters.P_StartDate,
                 P_EndDate   : $parameters.P_EndDate , P_DisplayCurrency : $parameters.P_DisplayCurrency )
   
  association [0..1] to I_PurchasingGroup           as _PurchasingGroup        on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_PurchasingOrganization    as _PurchasingOrganization on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [1..1] to I_Plant                     as _Plant                  on  $projection.Plant = _Plant.Plant  
  association [0..1] to I_Supplier                  as _Supplier               on  $projection.Supplier     = _Supplier.Supplier
  association [1..1] to I_ProductGroup_2            as _MaterialGroup          on  $projection.MaterialGroup = _MaterialGroup.ProductGroup
  association [1..1] to I_CompanyCode               as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode  
  association [1..1] to I_CalendarDate              as _Calendar               on  $projection.PurchaseOrderDate = _Calendar.CalendarDate
  association[1..1] to I_Country                    as _Country                on  $projection.SupplierCountry = _Country.Country
  association[1..1] to I_Region                     as _Region                 on  $projection.Region = _Region.Region and _Region.Country = $projection.SupplierCountry
   
{
   
    key PurchaseOrder,
    key PurchaseOrderItem,
    
        //@Consumption.hidden: true  
        UniqueIntSourcingRequest,
      
        @ObjectModel.foreignKey.association: '_Supplier'
        @Analytics.internalName:#LOCAL
        Supplier,
        
        @ObjectModel.foreignKey.association: '_PurchasingOrganization'
        @Analytics.internalName:#LOCAL
        PurchasingOrganization,
        
        @ObjectModel.foreignKey.association: '_PurchasingGroup'
        @Analytics.internalName:#LOCAL
        PurchasingGroup,
        
        @ObjectModel.foreignKey.association: '_Plant'
        @Analytics.internalName:#LOCAL
        Plant,
        
        @ObjectModel.foreignKey.association: '_CompanyCode'
        @Analytics.internalName:#LOCAL
        CompanyCode,
        
        @ObjectModel.foreignKey.association: '_MaterialGroup'
        @Analytics.internalName:#LOCAL
        MaterialGroup,
        
        @ObjectModel.foreignKey.association: '_Country'
        @Analytics.internalName:#LOCAL
        cast( _Supplier.Country as mm_a_supplier_country ) as SupplierCountry,
        
        @ObjectModel.foreignKey.association: '_Region'
        @Analytics.internalName:#LOCAL
        _Supplier.Region as Region,
        
        @ObjectModel.foreignKey.association: '_IncotermsClassification'
        @Analytics.internalName:#LOCAL
        IncotermsClassification,
        
        @ObjectModel.foreignKey.association: '_PaymentTerms'
        @Analytics.internalName:#LOCAL
        PaymentTerms,
        
        @Analytics.internalName:#LOCAL
        PurchaseOrderDate,
        
        @Analytics.internalName:#LOCAL
        _Calendar.CalendarYear,
        
        @DefaultAggregation:#MIN 
        NrOfPOWithNonCompliantPaytTrm as MinNrOfPOWithNonCompPaytTrm,  
        
        @Aggregation.referenceElement: ['UniqueIntSourcingRequest']
        @Aggregation.default: #COUNT_DISTINCT
        
        NrOfPOWithNonCompliantPaytTrm,  
       
        
        @Aggregation.referenceElement: ['PurchaseOrder']
        @Aggregation.default: #COUNT_DISTINCT
        
        cast( 1 as mm_pur_ana_numbrofpurords ) as NumberOfPurchaseOrders,
        
        @DefaultAggregation:#SUM
        @Semantics.amount.currencyCode:'DisplayCurrency'
        PurOrdNetAmountInDisplayCrcy,
         
        @Semantics.currencyCode:true
        cast( :P_DisplayCurrency as displaycurrency preserving type )                                                as DisplayCurrency,
        
        
        _MaterialGroup,
        _Supplier,
        _PurchasingGroup,
        _PurchasingOrganization,
        _Plant,
        _CompanyCode,
        _Calendar,
        _Country,
        _Region,
        _IncotermsClassification,
        _PaymentTerms
}
```
