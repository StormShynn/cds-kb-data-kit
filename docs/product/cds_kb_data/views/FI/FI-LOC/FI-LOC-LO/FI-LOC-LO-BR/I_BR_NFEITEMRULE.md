---
name: I_BR_NFEITEMRULE
description: "BR Nfeitemrule"
app_component: FI-LOC-LO-BR
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - item-level
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFEITEMRULE

**BR Nfeitemrule**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `BR_NFItemType` | ✓ | |  | `itmtyp` |  |  |
| `BR_NFeIsDefaultItemType` |  | |  | `defaulttyp` |  |  |
| `BR_NFeICMSStatisticCode` |  | |  | `icmsstat` |  |  |
| `BR_NFeIPIStatisticCode` |  | |  | `ipistat` |  |  |
| `BR_NFeIsCheckGoodIssue` |  | |  | `checkgrgi` |  |  |
| `BR_NFeIsUniqueItemType` |  | |  | `uniqueiv` |  |  |
| `BR_NFeIsCheckPerformReference` |  | |  | `norefiv` |  |  |
| `BR_NfeIsIgnoredRefInInvtryMgmt` |  | |  | `ignoreim` |  |  |
| `BR_NFeChkRefBsdOnDirectionCode` |  | |  | `checkdir` |  |  |
| `BR_NFeIsUnqItmForInvtryMgmt` |  | |  | `uniqueim` |  |  |
| `BR_NFeIsRefMaterialRequired` |  | |  | `refmd` |  |  |
| `BR_NFeIsObsvnFieldRequired` |  | |  | `observat` |  |  |
| `BR_NFeIsICMSBaseStoredOthBase` |  | |  | `excothbasicms` |  |  |
| `BR_NFeIsIPIBaseStoredOthBase` |  | |  | `excothbasipi` |  |  |
| `BR_NFeIsAllTxStoredOthBase` |  | |  | `othbas` |  |  |
| `BR_NFeIsTaxBaseAmountIgnored` |  | |  | `ignoretotal` |  |  |
| `BR_NFeIsSkipItemInReporting` |  | |  | `skip` |  |  |
| `BR_NFeIsTxCodeFrmPrecdgDocUsed` |  | |  | `redmwskz` |  |  |
| `BR_NFeMainItemInvtryMgmtCode` |  | |  | `mainitem1` |  |  |
| `BR_NFeMainItemInvtryMgmt2Code` |  | |  | `mainitem2` |  |  |
| `BR_NFeMainItemInvtryMgmt3Code` |  | |  | `mainitem3` |  |  |
| `BR_NFeMainItemInvtryMgmt4Code` |  | |  | `mainitem4` |  |  |
| `BR_NFeMainItemInvtryMgmt5Code` |  | |  | `mainitem5` |  |  |
| `BR_NFeMainItemInvtryMgmt6Code` |  | |  | `mainitem6` |  |  |
| `BR_NFeMainItemInvtryMgmt7Code` |  | |  | `mainitem7` |  |  |
| `BR_NFeMainItemInvtryMgmt8Code` |  | |  | `mainitem8` |  |  |
| `BR_NFeMainItemInvtryMgmt9Code` |  | |  | `mainitem9` |  |  |
| `BR_NFeMainItemInvtryMgmt10Code` |  | |  | `mainitem10` |  |  |
| `BR_NFeIsItmTypeUsdForTransfers` |  | |  | `transfer` |  |  |
| `BR_NFeIsThirdPtyShipmentItems` |  | |  | `trdparty` |  |  |
| `BR_NFeTextNumber` |  | |  | `textmod1` |  |  |
| `BR_NFeText2Number` |  | |  | `textmod2` |  |  |
| `BR_NFeHasToClearReference` |  | |  | `clearref1` |  |  |
| `BR_NFeHasToClearReference2` |  | |  | `clearref2` |  |  |
| `_BR_NFeTextNumber` | | ✓ | | | | |
| `_BR_NFeTextNumber2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFeTextNumber` | `I_BR_NFeModText` | [0..*] |
| `_BR_NFeTextNumber2` | `I_BR_NFeModText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFEITEMRULE'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Brazil Nota Fiscal Item Type Rules'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

define view I_BR_NFeItemRule
  as select from j_1bnfitmrule
  association[0..*] to I_BR_NFeModText as _BR_NFeTextNumber on _BR_NFeTextNumber.BR_NFeTextNumber = $projection.BR_NFeTextNumber
  association[0..*] to I_BR_NFeModText as _BR_NFeTextNumber2 on _BR_NFeTextNumber2.BR_NFeTextNumber = $projection.BR_NFeText2Number
{
  key   itmtyp        as BR_NFItemType,
        defaulttyp    as BR_NFeIsDefaultItemType,
        icmsstat      as BR_NFeICMSStatisticCode,
        ipistat       as BR_NFeIPIStatisticCode,
        checkgrgi     as BR_NFeIsCheckGoodIssue,
        uniqueiv      as BR_NFeIsUniqueItemType,
        norefiv       as BR_NFeIsCheckPerformReference,
        ignoreim      as BR_NfeIsIgnoredRefInInvtryMgmt,
        checkdir      as BR_NFeChkRefBsdOnDirectionCode,
        uniqueim      as BR_NFeIsUnqItmForInvtryMgmt,
        refmd         as BR_NFeIsRefMaterialRequired,
        observat      as BR_NFeIsObsvnFieldRequired,
        excothbasicms as BR_NFeIsICMSBaseStoredOthBase,
        excothbasipi  as BR_NFeIsIPIBaseStoredOthBase,
        othbas        as BR_NFeIsAllTxStoredOthBase,
        ignoretotal   as BR_NFeIsTaxBaseAmountIgnored,
        skip          as BR_NFeIsSkipItemInReporting,
        redmwskz      as BR_NFeIsTxCodeFrmPrecdgDocUsed,
        mainitem1     as BR_NFeMainItemInvtryMgmtCode,
        mainitem2     as BR_NFeMainItemInvtryMgmt2Code,
        mainitem3     as BR_NFeMainItemInvtryMgmt3Code,
        mainitem4     as BR_NFeMainItemInvtryMgmt4Code,
        mainitem5     as BR_NFeMainItemInvtryMgmt5Code,
        mainitem6     as BR_NFeMainItemInvtryMgmt6Code,
        mainitem7     as BR_NFeMainItemInvtryMgmt7Code,
        mainitem8     as BR_NFeMainItemInvtryMgmt8Code,
        mainitem9     as BR_NFeMainItemInvtryMgmt9Code,
        mainitem10    as BR_NFeMainItemInvtryMgmt10Code,
        transfer      as BR_NFeIsItmTypeUsdForTransfers,
        trdparty      as BR_NFeIsThirdPtyShipmentItems,
        textmod1      as BR_NFeTextNumber,
        textmod2      as BR_NFeText2Number,
        clearref1     as BR_NFeHasToClearReference,
        clearref2     as BR_NFeHasToClearReference2,
        _BR_NFeTextNumber,
        _BR_NFeTextNumber2
}
```
