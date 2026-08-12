---
name: I_BUSINESSPARTNERISBANK
description: "Business PartnerISBANK"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - business-partner
  - bank
  - partner
  - component:FS-BP
  - lob:Other
  - bo:BusinessPartner
  - bo:Bank
---
# I_BUSINESSPARTNERISBANK

**Business PartnerISBANK**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BankKey` |  | |  | `bankl` |  |  |
| `BankCountry` |  | |  | `banks` |  |  |
| `BPMinimumReserve` |  | |  | `min_reserv` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |
| `_BPMinimumReserve` | | ✓ | | | | |
| `_BPMinimumReserveText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BPMinimumReserve` | `I_BPMinimumReserve` | [0..1] |
| `_BPMinimumReserveText` | `I_BPMinimumReserveText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPFINSRVCISBANK',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking: #REQUIRED
                }
@ObjectModel: { representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'BusinessPartnerIsBank',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #M
                           },
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION            
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { ignorePropagatedAnnotations: true, 
             allowExtensions:true
           }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                       
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Business Partner Identification as bank'

define view I_BusinessPartnerIsBank
  as select from but0bank
  association [1]    to I_BusinessPartner         as _BusinessPartner         on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn on $projection.BusinessPartner = _BPFinancialServicesExtn.BusinessPartner
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */ 
  association [0..1] to I_BPMinimumReserve        as _BPMinimumReserve        on $projection.BPMinimumReserve = _BPMinimumReserve.BPMinimumReserve
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */ 
  association [0..*] to I_BPMinimumReserveText    as _BPMinimumReserveText    on $projection.BPMinimumReserve = _BPMinimumReserveText.BPMinimumReserve
{
  key but0bank.partner    as BusinessPartner,
      but0bank.bankl      as BankKey,
      but0bank.banks      as BankCountry,
      but0bank.min_reserv as BPMinimumReserve,

      _BusinessPartner,
      _BPFinancialServicesExtn,
      _BPMinimumReserve,
      _BPMinimumReserveText
}
```
