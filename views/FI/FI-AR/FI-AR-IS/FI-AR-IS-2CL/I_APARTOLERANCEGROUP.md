---
name: I_APARTOLERANCEGROUP
description: Apartolerancegroup
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_APARTOLERANCEGROUP

**Apartolerancegroup**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `APARToleranceGroup` | ✓ | |  | `cast( tg.togru as farp_togru )` |  |  |
| `GraceDays` |  | |  | `toler` |  |  |
| `FixedCashDiscount` |  | |  | `cast( tg.sktre as farp_dzbfix )` |  |  |
| `ArrearsDaysBaseDateDetn` |  | |  | `vrzde` |  |  |
| `MaxPaytDiffExpnAmountInCCCrcy` |  | |  | `cast( tg.betrh as farp_betrh_043t )` |  |  |
| `MaxPaytDiffRevnAmountInCCCrcy` |  | |  | `cast( tg.betrs as farp_betrs_043t )` |  |  |
| `MaxPaymentDiffExpensePercent` |  | |  | `cast( tg.prozh as farp_prozh_043t )` |  |  |
| `MaxPaymentDiffRevenuePercent` |  | |  | `cast( tg.prozs as farp_prozs_043t )` |  |  |
| `CompanyCodeCurrency` |  | | `_t001` | `waers` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_APARToleranceGroupText` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_APARToleranceGroupText` | `I_APARToleranceGroupText` | [0..*] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog:    { sqlViewName:                 'IFIAPARTOLGROUP',
                   preserveKey:                 true,
                   compiler.compareFilter:      true,
                   buffering.status:            #ACTIVE,
                   buffering.type:              #FULL }

@Analytics:      { dataCategory:                #DIMENSION,
                   internalName:                #LOCAL }

@Metadata:       { ignorePropagatedAnnotations: true,
                   allowExtensions:             true }

@ObjectModel:    { modelingPattern:             #ANALYTICAL_DIMENSION,
                   representativeKey:           'APARToleranceGroup',
                   usageType.serviceQuality:    #A,
                   usageType.sizeCategory:      #M,
                   usageType.dataClass:         #CUSTOMIZING,
                   supportedCapabilities:       [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION ],
                   sapObjectNodeType.name:      'APARToleranceGroup'       
                   }

@AccessControl:  { authorizationCheck:          #NOT_REQUIRED }

@EndUserText:    { label:                       'Tolerance Group for Cust and Suppl' }
@VDM:            { viewType:                    #BASIC }
@ClientHandling: { algorithm:                   #SESSION_VARIABLE }
@Search:         { searchable:                  false }
define view I_APARToleranceGroup  as select from t043g as tg
  left outer to one join t001                    as _t001                       on  tg.bukrs = _t001.bukrs                                                
  association [0..1] to I_CompanyCode            as _CompanyCode                on  $projection.CompanyCode                    = _CompanyCode.CompanyCode
  association [0..*] to I_APARToleranceGroupText as _APARToleranceGroupText     on  $projection.CompanyCode                    = _APARToleranceGroupText.CompanyCode
                                                                                and $projection.APARToleranceGroup             = _APARToleranceGroupText.APARToleranceGroup
  association [0..1] to I_Currency               as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency            = _CompanyCodeCurrency.Currency   
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key tg.bukrs                                   as CompanyCode,
      @ObjectModel.text.association: '_APARToleranceGroupText'
  key cast( tg.togru as farp_togru )             as APARToleranceGroup,

      tg.toler                                   as GraceDays,
      cast( tg.sktre as farp_dzbfix )            as FixedCashDiscount,
      tg.vrzde                                   as ArrearsDaysBaseDateDetn,
      
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( tg.betrh as farp_betrh_043t )        as MaxPaytDiffExpnAmountInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast( tg.betrs as farp_betrs_043t )        as MaxPaytDiffRevnAmountInCCCrcy,
      
      cast( tg.prozh as farp_prozh_043t )        as MaxPaymentDiffExpensePercent,
      cast( tg.prozs as farp_prozs_043t )        as MaxPaymentDiffRevenuePercent,
      
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode: true
      // Due to buffering in V1 View we have to use t001 as base, instead of I_CompanyCode (will midterm not be converted to view entity )      
      _t001.waers                                as CompanyCodeCurrency,
      

      _CompanyCode,
      _CompanyCodeCurrency,
      _APARToleranceGroupText
}
```
