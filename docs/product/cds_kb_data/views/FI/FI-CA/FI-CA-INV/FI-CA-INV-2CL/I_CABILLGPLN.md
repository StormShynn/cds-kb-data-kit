---
name: I_CABILLGPLN
description: "Cabillgpln"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLN

**Cabillgpln**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnNumber` | ✓ | |  | `billplanno` |  |  |
| `CABillgPlnCategory` |  | |  | `cast(bipcat as bipcat_gfn_kk preserving type )` |  |  |
| `CABillgPlnType` |  | |  | `biptype` |  |  |
| `CABillgPlnStatus` |  | |  | `status` |  |  |
| `CABillgPlnStartDate` |  | |  | `valid_from` |  |  |
| `CABillgPlnEndDate` |  | |  | `valid_to` |  |  |
| `CABillgPlnLastRequestDate` |  | |  | `requestdate_last` |  |  |
| `CABillgPlnNextRequestDate` |  | |  | `requestdate_next` |  |  |
| `CABillgPlnDescription` |  | |  | `biptext` |  |  |
| `CABillgPlnExternalReference` |  | |  | `bipref` |  |  |
| `LogicalSystem` |  | |  | `logsys` |  |  |
| `CAApplicationArea` |  | |  | `applk` |  |  |
| `BusinessPartner` |  | |  | `cast(gpart as bu_partner preserving type )` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `CAInvcgMasterDataType` |  | |  | `mdcat` |  |  |
| `CAContract` |  | |  | `vtref` |  |  |
| `CAProviderContractItemUUID` |  | |  | `vtpid` |  |  |
| `CASubApplication` |  | |  | `subap` |  |  |
| `CAMasterAgreement` |  | |  | `makey` |  |  |
| `CAInvcgOffsettingReferenceKey` |  | |  | `offset_refid` |  |  |
| `CABillgPlnCreatedByUser` |  | |  | `crname` |  |  |
| `CABillgPlnCreationDate` |  | |  | `crdate` |  |  |
| `CABillgPlnCreationTime` |  | |  | `crtime` |  |  |
| `CABillgPlnChangedByUser` |  | |  | `chname` |  |  |
| `CABillgPlnChangeDate` |  | |  | `chdate` |  |  |
| `CABillgPlnChangeTime` |  | |  | `chtime` |  |  |
| `CABillgPlnCreationMode` |  | |  | `crmode` |  |  |
| `CABillgPlnNumberBllbleItm` |  | |  | `bit_number` |  |  |
| `CABillgPlnCompletionDate` |  | |  | `completion_date` |  |  |
| `CABillgPlnIsTemplate` |  | |  | `xtemp` |  |  |
| `CABillgPlnVersion` |  | |  | `version` |  |  |
| `_CABillgPlnCategory` | | ✓ | | | | |
| `_CABillgPlnType` | | ✓ | | | | |
| `_CABillgPlnStatus` | | ✓ | | | | |
| `_CABillgPlnCreationMode` | | ✓ | | | | |
| `_CAInvcgMasterDataType` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_ContractAccount` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CAMasterAgreement` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnCategory` | `I_CABillgPlnCategory` | [0..1] |
| `_CABillgPlnType` | `I_CABillgPlnType` | [0..1] |
| `_CABillgPlnStatus` | `I_CABillgPlnStatus` | [0..1] |
| `_CABillgPlnCreationMode` | `I_CABillgPlnCreationMode` | [0..1] |
| `_CAInvcgMasterDataType` | `I_CAInvcgMasterDataType` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_ContractAccount` | `I_ContractAccountHeader` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CAMasterAgreement` | `I_CAMasterAgreement` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [0..1] |
| `_Extension` | `E_CABillgPln` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkbix_bip_h', 
          role: #MAIN,
          viewElement: ['CABillgPlnNumber'],
          tableElement: ['billplanno']  
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgPlnNumber',
  sapObjectNodeType.name: 'ContrAcctgBillingPlan',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE 
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Abrechnungsplankopf'
define view entity I_CABillgPln
  as select from dfkkbix_bip_h
  association [0..1] to I_CABillgPlnCategory     as _CABillgPlnCategory     on  $projection.CABillgPlnCategory = _CABillgPlnCategory.CABillgPlnCategory
  association [0..1] to I_CABillgPlnType         as _CABillgPlnType         on  $projection.CABillgPlnType = _CABillgPlnType.CABillgPlnType
  association [0..1] to I_CABillgPlnStatus       as _CABillgPlnStatus       on  $projection.CABillgPlnStatus = _CABillgPlnStatus.CABillgPlnStatus
  association [0..1] to I_CABillgPlnCreationMode as _CABillgPlnCreationMode on  $projection.CABillgPlnCreationMode = _CABillgPlnCreationMode.CABillgPlnCreationMode
  association [0..1] to I_CAInvcgMasterDataType  as _CAInvcgMasterDataType  on  $projection.CAInvcgMasterDataType = _CAInvcgMasterDataType.CAInvcgMasterDataType
  association [0..1] to I_BusinessPartner        as _BusinessPartner        on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader  as _ContractAccount        on  $projection.ContractAccount = _ContractAccount.ContractAccount
  association [0..1] to I_CAApplicationArea      as _CAApplicationArea      on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CASubApplication       as _CASubApplication       on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CAMasterAgreement      as _CAMasterAgreement      on  $projection.CAMasterAgreement = _CAMasterAgreement.CAMasterAgreement

  association [0..1] to I_ContractAccountPartner as _ContractAccountPartner on  $projection.ContractAccount = _ContractAccountPartner.ContractAccount
                                                                            and $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
  -- extensions
  association [1..1] to E_CABillgPln             as _Extension              on  $projection.CABillgPlnNumber = _Extension.CABillgPlnNumber
{
  key billplanno                                     as CABillgPlnNumber,
      @ObjectModel.foreignKey.association: '_CABillgPlnCategory'
      cast(bipcat as bipcat_gfn_kk preserving type ) as CABillgPlnCategory,
      @ObjectModel.foreignKey.association: '_CABillgPlnType'
      biptype                                        as CABillgPlnType,
      @ObjectModel.foreignKey.association: '_CABillgPlnStatus'
      status                                         as CABillgPlnStatus,
      valid_from                                     as CABillgPlnStartDate,
      valid_to                                       as CABillgPlnEndDate,
      requestdate_last                               as CABillgPlnLastRequestDate,
      requestdate_next                               as CABillgPlnNextRequestDate,
      biptext                                        as CABillgPlnDescription,
      bipref                                         as CABillgPlnExternalReference,
      logsys                                         as LogicalSystem,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                          as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast(gpart as bu_partner preserving type )     as BusinessPartner,

      @ObjectModel.foreignKey.association: '_ContractAccount'
      vkont                                          as ContractAccount,
      @ObjectModel.foreignKey.association: '_CAInvcgMasterDataType'
      mdcat                                          as CAInvcgMasterDataType,
      vtref                                          as CAContract,
      vtpid                                          as CAProviderContractItemUUID,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                          as CASubApplication,
      --@ObjectModel.foreignKey.association: '_CAMasterAgreement'
      makey                                          as CAMasterAgreement,
      offset_refid                                   as CAInvcgOffsettingReferenceKey,
      @Semantics.user.createdBy: true
      crname                                         as CABillgPlnCreatedByUser,
      @Semantics.systemDate.createdAt: true
      crdate                                         as CABillgPlnCreationDate,
      @Semantics.systemTime.createdAt: true
      crtime                                         as CABillgPlnCreationTime,
      @Semantics.user.lastChangedBy: true
      chname                                         as CABillgPlnChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      chdate                                         as CABillgPlnChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      chtime                                         as CABillgPlnChangeTime,
      @ObjectModel.foreignKey.association: '_CABillgPlnCreationMode'
      crmode                                         as CABillgPlnCreationMode,
      bit_number                                     as CABillgPlnNumberBllbleItm,
      completion_date                                as CABillgPlnCompletionDate,
      xtemp                                          as CABillgPlnIsTemplate,
      version                                        as CABillgPlnVersion,

      // associations
      _CABillgPlnCategory,
      _CABillgPlnType,
      _CABillgPlnStatus,
      _CABillgPlnCreationMode,
      _CAInvcgMasterDataType,
      _CAApplicationArea,
      _BusinessPartner,
      _ContractAccount,
      _CASubApplication,
      _CAMasterAgreement,
      _ContractAccountPartner
}
```
