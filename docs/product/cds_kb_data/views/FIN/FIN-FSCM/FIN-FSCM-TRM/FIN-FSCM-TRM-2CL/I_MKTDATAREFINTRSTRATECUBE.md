---
name: I_MKTDATAREFINTRSTRATECUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAREFINTRSTRATECUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?"
semantic_vi: "Reference IR - Cube — CDS view giao diện dựa trên I_ReferenceInterestRateVal."
keywords:
  - "reference"
  - "cube"
  - "interest"
  - "rate"
  - "calendar"
  - "date"
  - "currency"
  - "effective"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_MKTDATAREFINTRSTRATECUBE

**This CDS view provides the prerequisites for answering the following business questions: What is the reference interest rate for a specified currency in a period of time?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAREFINTRSTRATECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceInterestRate` | ✓ | |  | `cast( RefIntVal.ReferenceInterestRate as ftr_gen_ref_interest_rate )` | `CHAR(10)` | Reference Interest Rate |
| `CalendarDate` | ✓ | |  | `cast( RefIntVal.EffectiveDate as calendardate )` | `DATS(8)` | Calendar Date |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `EffectiveInterestRate` |  | |  |  | `DEC(10)` | Interest Rate |
| `_RefInterest` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_ReferenceInterestRateCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RefInterest` | `I_ReferenceInterestRate` | [1..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_ReferenceInterestRateCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAREFINTRSTRATECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MKTDATAREFINTRSTRATECUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMDREFINTCUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.allowExtensions:true
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL 
@ObjectModel.representativeKey: 'ReferenceInterestRate'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Reference IR - Cube'

define view I_MktDataRefIntrstRateCube 
        as select from I_ReferenceInterestRateVal            as RefIntVal
               association [1..1] to I_ReferenceInterestRate as _RefInterest  on _RefInterest.ReferenceInterestRate = $projection.ReferenceInterestRate                                                                  
               association [1..1] to I_CalendarDate          as _CalendarDate on _CalendarDate.CalendarDate         = $projection.CalendarDate   
               association [0..1] to I_Currency            as _ReferenceInterestRateCurrency on $projection.currency   = _ReferenceInterestRateCurrency.Currency                 
     
        {
        
            @ObjectModel.foreignKey.association: '_RefInterest'
            key cast( RefIntVal.ReferenceInterestRate as ftr_gen_ref_interest_rate ) as ReferenceInterestRate,
            @ObjectModel.foreignKey.association: '_CalendarDate'
            key cast( RefIntVal.EffectiveDate as calendardate ) as CalendarDate,
      
            @ObjectModel.foreignKey.association: '_ReferenceInterestRateCurrency'
                RefIntVal._ReferenceInterestRate.Currency,
                RefIntVal.EffectiveInterestRate,
                _RefInterest,
                _CalendarDate,
                _ReferenceInterestRateCurrency
                
        }
```
