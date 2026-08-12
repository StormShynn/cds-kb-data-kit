---
name: I_CUSTOMERWITHTAX
description: "Customerwithtax"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `kunnr` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `WithholdingTaxType` | ✓ | |  | `witht` |  |  |
| `WithholdingTaxCode` |  | |  | `wt_withcd` |  |  |
| `WithholdingTaxAgent` |  | |  | `wt_agent` |  |  |
| `ObligationDateBegin` |  | |  | `wt_agtdf` |  |  |
| `ObligationDateEnd` |  | |  | `wt_agtdt` |  |  |
| `WithholdingTaxNumber` |  | |  | `wt_wtstcd` |  |  |
| `WithholdingTaxCertificate` |  | |  | `wt_exnr` |  |  |
| `WithholdingTaxExmptPercent` |  | |  | `wt_exrt` |  |  |
| `ExemptionDateBegin` |  | |  | `wt_exdf` |  |  |
| `ExemptionDateEnd` |  | |  | `wt_exdt` |  |  |
| `ExemptionReason` |  | |  | `wt_wtexrs` |  |  |
| `RecipientType` |  | |  | `qsrec` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

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
