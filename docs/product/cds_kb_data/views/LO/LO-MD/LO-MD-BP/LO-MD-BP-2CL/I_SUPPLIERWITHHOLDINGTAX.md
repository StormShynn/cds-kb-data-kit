---
name: I_SUPPLIERWITHHOLDINGTAX
description: "Supplierwithholdingtax"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - tax
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERWITHHOLDINGTAX

**Supplierwithholdingtax**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  | `lifnr` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `WithholdingTaxType` | ✓ | |  | `witht` |  |  |
| `WithholdingTaxNumber` |  | |  | `wt_wtstcd` |  |  |
| `WithholdingTaxCode` |  | |  | `wt_withcd` |  |  |
| `IsWithholdingTaxSubject` |  | |  | `wt_subjct` |  |  |
| `RecipientType` |  | |  | `qsrec` |  |  |
| `WithholdingTaxCertificate` |  | |  | `wt_exnr` |  |  |
| `WithholdingTaxExmptPercent` |  | |  | `wt_exrt` |  |  |
| `ExemptionDateBegin` |  | |  | `wt_exdf` |  |  |
| `ExemptionDateEnd` |  | |  | `wt_exdt` |  |  |
| `ExemptionReason` |  | |  | `wt_wtexrs` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLRWHLDGTAX'
@ClientHandling.algorithm : #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Supplier WithHolding Tax'
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
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE ,
                                     #EXTRACTION_DATA_SOURCE,   
                                     #ANALYTICAL_DIMENSION,                                 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]                                  
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.sapObjectNodeType.name: 'SupplierWithHoldingTax' 
@ObjectModel.representativeKey: 'WithholdingTaxType'
@ObjectModel.usageType.sizeCategory: #M
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

define view I_SupplierWithHoldingTax
  as select from lfbw as WithHoldingTax

  association [1..1] to I_CompanyCode                 as _CompanyCode               on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_SupplierCompany             as _SupplierCompany           on $projection.Supplier = _SupplierCompany.Supplier
                                                                                    and $projection.CompanyCode = _SupplierCompany.CompanyCode
  association [1..1] to I_Supplier                    as _Supplier                  on $projection.Supplier = _Supplier.Supplier                                                                               
{  
   @ObjectModel.foreignKey.association: '_Supplier'
  key  lifnr                                                       as Supplier,  
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key  bukrs                                                       as CompanyCode,
  key  witht                                                       as WithholdingTaxType,
       wt_wtstcd                                                   as WithholdingTaxNumber, 
       wt_withcd                                                   as WithholdingTaxCode,
       wt_subjct                                                   as IsWithholdingTaxSubject,
       qsrec                                                       as RecipientType,
       wt_exnr                                                     as WithholdingTaxCertificate,
       //wt_exnr                                                     as WithholdingTaxCertificate2,
       wt_exrt                                                     as WithholdingTaxExmptPercent,
       wt_exdf                                                     as ExemptionDateBegin,
       wt_exdt                                                     as ExemptionDateEnd,
       wt_wtexrs                                                   as ExemptionReason,
   //    _SupplierCompany.AuthorizationGroup,
       _SupplierCompany,
       _CompanyCode,
       _Supplier
}
```
