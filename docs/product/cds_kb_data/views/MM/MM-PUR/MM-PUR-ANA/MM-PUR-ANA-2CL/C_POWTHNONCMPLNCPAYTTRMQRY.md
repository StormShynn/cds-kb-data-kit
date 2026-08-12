---
name: C_POWTHNONCMPLNCPAYTTRMQRY
description: "PO having Non compliant Payment Terms"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POWTHNONCMPLNCPAYTTRMQRY')/$value
semantic_en: "PO having Non compliant Payment Terms"
semantic_vi: "PO having Non compliant Payment Terms — CDS view tiêu dùng dựa trên C_POWthNonCmplncPaytTrm."
keywords:
  - "having"
  - "non"
  - "compliant"
  - "payment"
  - "terms"
  - "purchase"
  - "order"
  - "item"
  - "supplier"
  - "purchasing"
  - "organization"
  - "group"
tags:
  - MM
  - bo:purchaseorder
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - payment
---
# C_POWTHNONCMPLNCPAYTTRMQRY

**PO having Non compliant Payment Terms**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POWTHNONCMPLNCPAYTTRMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `PaymentTermsDescription` |  | | `_PaymentTerms._Text` | `PaymentTermsDescription` | `CHAR(1024)` | Payment Terms Description |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchase Order Date |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `PurOrdNetAmountInDisplayCrcy` |  | |  |  | `CURR(21)` | Purchase Order Net Amount |
| `NrOfPOInNonCompliantPaytTrms` |  | |  | `NrOfPOWithNonCompliantPaytTrm` | `INT4(10)` | Number of PO with non compliant payment terms |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |
| `MinNrOfPOWithNonCompPaytTrm` |  | |  |  | `INT4(10)` | Number of PO with non compliant payment terms |
| `NrOfPOWithNonCompliantPaytTrm` |  | |  | `cast( 1 as mm_a_nrof_non_cmplnc_payttrm )` | `INT4(10)` | Number of PO with non compliant payment terms |
| `POWithNonCompliantPaytTrmPct` |  | |  | `cast( 1 as mm_a_non_cmplnc_payttrm_pct )` | `DEC(15)` | Percentage of PO with non compliant payment terms |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POWTHNONCMPLNCPAYTTRMQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POWTHNONCMPLNCPAYTTRMQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMPOPAYTMQUERY'
@EndUserText.label: 'PO having Non compliant Payment Terms'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY 
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin 
@AccessControl.personalData.blocking: #NOT_REQUIRED 
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #XL 
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY  ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.allowExtensions:true 


define view C_POWthNonCmplncPaytTrmQry 
with parameters

  @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_StartDate    : badat,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' }  ]
    }
    @Consumption.hidden: true
    P_EndDate      : badat,

    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
     @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }] 
    P_DateFunction : datefunctionid ,
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency           : displaycurrency
     
   as select from C_POWthNonCmplncPaytTrm ( P_StartDate  : $parameters.P_StartDate,
                 P_EndDate   : $parameters.P_EndDate , P_DisplayCurrency : $parameters.P_DisplayCurrency)
    
   
{
   
    key PurchaseOrder,
    key PurchaseOrderItem,
    
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL 
        Supplier,
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL 
        PurchasingOrganization,
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL 
        PurchasingGroup,
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL 
        CompanyCode,
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL 
        MaterialGroup,
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL 
        Plant,
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL 
        SupplierCountry, 
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL
        Region,
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL
        IncotermsClassification,
        
        @AnalyticsDetails.query.display: #KEY
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL
        PaymentTerms,
        
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL
        _PaymentTerms._Text.PaymentTermsDescription as PaymentTermsDescription,
        
        PurchaseOrderDate,
        
        @AnalyticsDetails.query.display: #KEY_TEXT 
        @AnalyticsDetails.query.axis: #FREE
        @Analytics.internalName:#LOCAL 
        CalendarYear,
        
        @UI.hidden: true
        @Semantics.currencyCode:true
        DisplayCurrency,
        
        @Semantics.amount.currencyCode: 'DisplayCurrency'
        PurOrdNetAmountInDisplayCrcy,
        
        @Consumption.hidden: true 
        NrOfPOWithNonCompliantPaytTrm as NrOfPOInNonCompliantPaytTrms,
       
        @Consumption.hidden: true 
        NumberOfPurchaseOrders,
        
        @Consumption.hidden: true 
        MinNrOfPOWithNonCompPaytTrm,
        
        @DefaultAggregation: #FORMULA 
        @AnalyticsDetails.query.formula: 'CASE WHEN $projection.MinNrOfPOWithNonCompPaytTrm = 0 THEN ( $projection.NrOfPOInNonCompliantPaytTrms - 1 ) ELSE $projection.NrOfPOInNonCompliantPaytTrms END'
        cast( 1 as mm_a_nrof_non_cmplnc_payttrm )              as   NrOfPOWithNonCompliantPaytTrm,
        
        @DefaultAggregation: #FORMULA 
        @AnalyticsDetails.query.formula: 'CASE WHEN $projection.NumberOfPurchaseOrders > 0 THEN ( $projection.NrOfPOWithNonCompliantPaytTrm * 100 ) / $projection.NumberOfPurchaseOrders ELSE 0 END'
        cast( 1 as mm_a_non_cmplnc_payttrm_pct )              as   POWithNonCompliantPaytTrmPct
}
```
