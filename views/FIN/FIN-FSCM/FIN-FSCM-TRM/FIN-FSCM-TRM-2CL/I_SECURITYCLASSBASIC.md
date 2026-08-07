---
name: I_SECURITYCLASSBASIC
description: Securityclassbasic
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYCLASSBASIC

**Securityclassbasic**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SecurityClass` | ✓ | |  | `cast(ranl as ftr_gen_security_class preserving type)` |
| `FinancialInstrProductCategory` |  | |  | `cast(sanlf as ftr_gen_fin_instr_prod_categ preserving type)` |
| `SecurityClassStatus` |  | |  | `sstati` |
| `SecurityClassName` |  | |  | `cast(SecurityClass.xalkz as ftr_gen_security_class_name preserving type)` |
| `SecurityClassDescription` |  | |  | `cast(SecurityClass.xallb as ftr_gen_security_class_lname preserving type)` |
| `FinancialInstrumentProductType` |  | |  | `gsart` |
| `ScrtyClassGenClassification` |  | |  | `srolext` |
| `Issuer` |  | |  | `cast(SecurityClass.repke as repke_new preserving type)` |
| `IssueCurrency` |  | |  | `rewhr` |
| `SecurityClassIssuePriceValue` |  | |  | `cast(SecurityClass.bempreis as ftr_sc_bempreis)` |
| `IssueRateInPercent` |  | |  | `pemkurs` |
| `SecurityClassTransferType` |  | |  | `swerttyp` |
| `SecurityClassQuotation` |  | |  | `snoti` |
| `ScrtyClMinimalNumberOfUnits` |  | |  | `cast( SecurityClass.unit_tick as ftr_sc_min_unit_num preserving type )` |
| `SecurityClassIsListed` |  | |  | `sboernot` |
| `ScrtyClassIsRlvtForTaxes` |  | |  | `cast( case when SecurityClass.sstbe = '1' then 'X' else '' end as ftr_sc_sstbe preserving type )` |
| `SecurityClassTaxClassification` |  | |  | `tax_classification` |
| `ScrtyClCmplmntyIdnCode` |  | |  | `coicode` |
| `ScrtyClCmplmntyIdnCtryReg` |  | |  | `coiland` |
| `SecurityClassCreatedByUser` |  | |  | `cast(SecurityClass.rerf as ftr_sc_rerf preserving type)` |
| `SecurityClassCreationDate` |  | |  | `cast(SecurityClass.derf as ftr_sc_derf preserving type)` |
| `SecurityClassCreationTime` |  | |  | `cast(SecurityClass.terf as ftr_sc_terf preserving type)` |
| `SecurityClassCreationSource` |  | |  | `cast(SecurityClass.reher as ftr_sc_reher preserving type)` |
| `SecurityClassLastChangedByUser` |  | |  | `cast(SecurityClass.rbear as ftr_sc_rbear preserving type)` |
| `SecurityClassLastChangedDate` |  | |  | `cast(SecurityClass.dbear as ftr_sc_dbear preserving type)` |
| `SecurityClassLastChangedTime` |  | |  | `cast(SecurityClass.tbear as ftr_sc_tbear preserving type)` |
| `SecurityClassLastChangedSource` |  | |  | `cast(SecurityClass.rbher as ftr_sc_rbher preserving type)` |
| `SecurityClassIsPledgeable` |  | |  | `wpfan` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Security Class Basic'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#SEARCHABLE_ENTITY,#SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
define view entity I_SecurityClassBasic
  as select from vwpanla as SecurityClass

{
  key cast(ranl as ftr_gen_security_class preserving type)                      as SecurityClass,
      cast(sanlf as ftr_gen_fin_instr_prod_categ preserving type)               as FinancialInstrProductCategory,
      SecurityClass.sstati                                                      as SecurityClassStatus,
      @Semantics.text: true
      cast(SecurityClass.xalkz as ftr_gen_security_class_name preserving type)  as SecurityClassName,
      @Semantics.text: true
      cast(SecurityClass.xallb as ftr_gen_security_class_lname preserving type) as SecurityClassDescription,
      SecurityClass.gsart                                                       as FinancialInstrumentProductType,
      SecurityClass.srolext                                                     as ScrtyClassGenClassification,
      cast(SecurityClass.repke as repke_new preserving type)                    as Issuer,
      SecurityClass.rewhr                                                       as IssueCurrency,
      cast(SecurityClass.bempreis as ftr_sc_bempreis)                           as SecurityClassIssuePriceValue,
      SecurityClass.pemkurs                                                     as IssueRateInPercent,
      SecurityClass.swerttyp                                                    as SecurityClassTransferType,
      SecurityClass.snoti                                                       as SecurityClassQuotation,
      cast( SecurityClass.unit_tick   as ftr_sc_min_unit_num preserving type )  as ScrtyClMinimalNumberOfUnits,
      @Semantics.booleanIndicator
      SecurityClass.sboernot                                                    as SecurityClassIsListed,
      @Semantics.booleanIndicator
      cast( case
        when SecurityClass.sstbe = '1' then 'X'
        else ''
      end as ftr_sc_sstbe preserving type )                                     as ScrtyClassIsRlvtForTaxes,
      SecurityClass.tax_classification                                          as SecurityClassTaxClassification,
      SecurityClass.coicode                                                     as ScrtyClCmplmntyIdnCode,
      SecurityClass.coiland                                                     as ScrtyClCmplmntyIdnCtryReg,
      cast(SecurityClass.rerf as ftr_sc_rerf preserving type)                   as SecurityClassCreatedByUser,
      cast(SecurityClass.derf as ftr_sc_derf preserving type)                   as SecurityClassCreationDate,
      cast(SecurityClass.terf as ftr_sc_terf preserving type)                   as SecurityClassCreationTime,
      cast(SecurityClass.reher as ftr_sc_reher preserving type)                 as SecurityClassCreationSource,
      cast(SecurityClass.rbear as ftr_sc_rbear preserving type)                 as SecurityClassLastChangedByUser,
      cast(SecurityClass.dbear as ftr_sc_dbear preserving type)                 as SecurityClassLastChangedDate,
      cast(SecurityClass.tbear as ftr_sc_tbear preserving type)                 as SecurityClassLastChangedTime,
      cast(SecurityClass.rbher as ftr_sc_rbher preserving type)                 as SecurityClassLastChangedSource,

      //Only in basic level
      @Semantics.booleanIndicator
      SecurityClass.wpfan                                                       as SecurityClassIsPledgeable

}
```
