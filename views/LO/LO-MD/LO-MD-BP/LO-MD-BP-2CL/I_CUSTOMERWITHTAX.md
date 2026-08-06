---
name: I_CUSTOMERWITHTAX
description: Customerwithtax
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - customer
  - tax
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
---
# I_CUSTOMERWITHTAX

**Customerwithtax**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Customer` | `kunnr` |
| key `CompanyCode` | `bukrs` |
| key `WithholdingTaxType` | `witht` |
| `WithholdingTaxCode` | `wt_withcd` |
| `WithholdingTaxAgent` | `wt_agent` |
| `ObligationDateBegin` | `wt_agtdf` |
| `ObligationDateEnd` | `wt_agtdt` |
| `WithholdingTaxNumber` | `wt_wtstcd` |
| `WithholdingTaxCertificate` | `wt_exnr` |
| `WithholdingTaxExmptPercent` | `wt_exrt` |
| `ExemptionDateBegin` | `wt_exdf` |
| `ExemptionDateEnd` | `wt_exdt` |
| `ExemptionReason` | `wt_wtexrs` |
| `RecipientType` | `qsrec` |
| `_CompanyCode` | *Association* |
| `_CustomerCompany` | *Association* |
| `_Customer` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTWHLDTAX'
@ClientHandling.algorithm : #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Customer WithHolding Tax'
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted']

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@ObjectModel.sapObjectNodeType.name: 'CustomerWithHoldingTax' 
@ObjectModel.representativeKey: 'WithholdingTaxType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE ]  
@ObjectModel.modelingPattern: #NONE                           
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustomerWithTax
  as select from knbw as WithHoldingTax

  association [1..1] to I_CompanyCode                 as _CompanyCode               on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_CustomerCompany             as _CustomerCompany           on $projection.Customer = _CustomerCompany.Customer
                                                                                    and $projection.CompanyCode = _CustomerCompany.CompanyCode
  association [1..1] to I_Customer                    as _Customer           on  $projection.Customer = _Customer.Customer                                                                          
  
{
  @ObjectModel.foreignKey.association: '_Customer'
  key  kunnr                                        as Customer,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key  bukrs                                        as CompanyCode,
  key  witht                                        as WithholdingTaxType,
       wt_withcd                                    as WithholdingTaxCode, 
       wt_agent                                     as WithholdingTaxAgent, 
       wt_agtdf                                     as ObligationDateBegin,
       wt_agtdt                                     as ObligationDateEnd,
       wt_wtstcd                                    as WithholdingTaxNumber, 
       wt_exnr                                      as WithholdingTaxCertificate, 
       wt_exrt                                      as WithholdingTaxExmptPercent, 
       wt_exdf                                      as ExemptionDateBegin, 
       wt_exdt                                      as ExemptionDateEnd, 
       wt_wtexrs                                    as ExemptionReason,
       qsrec                                        as RecipientType,
       //_CustomerCompany.AuthorizationGroup,
       /*associations*/
       _CustomerCompany,
       _CompanyCode,
       _Customer
      
}
```
