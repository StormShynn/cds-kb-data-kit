---
name: I_FINCOPITEMCUBE
description: "Fincopitemcube"
app_component: FIN-FSCM-CLM-2CL
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
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - analytical
  - item-level
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_FINCOPITEMCUBE

**Fincopitemcube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
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
| `OriginSystem` | ✓ | |  |  |  |  |
| `OriginApplication` | ✓ | |  |  |  |  |
| `OriginDocument` | ✓ | |  |  |  |  |
| `OriginTransaction` | ✓ | |  |  |  |  |
| `OriginTransactionQualifier` | ✓ | |  |  |  |  |
| `CashFlow` | ✓ | |  |  |  |  |
| `ValidFrom` | ✓ | |  |  |  |  |
| `ValidTo` | ✓ | |  |  |  |  |
| `BankAccountInternalID` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CertaintyLevel` |  | |  |  |  |  |
| `LiquidityItem` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `TransactionDate` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Cop Item - Cube'
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFCOPITEMCUBE'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
//@Analytics.readClassName: 'CL_FCLM_LM_BALANCE_CDS'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.sapObjectNodeType.name:'CashFlowCertaintyLevel'
@ObjectModel.supportedCapabilities:[ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
define view entity I_FinCopItemCube
  //with parameters
  //P_KeyDate : sydate,
  as select from I_CashFlow as flow

{
  key flow.OriginSystem,
  key flow.OriginApplication,
  key flow.OriginDocument,
  key flow.OriginTransaction,
  key flow.OriginTransactionQualifier,
  key flow.CashFlow,
  key flow.ValidFrom,
  key flow.ValidTo,
  key flow.BankAccountInternalID,
      CompanyCode,
      CertaintyLevel,
      LiquidityItem,
      TransactionCurrency,
      TransactionDate,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AmountInTransactionCurrency

}
where
      TransactionDate > '00010101'
  and IsValid         = 'X'
```
