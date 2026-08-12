---
name: I_SECURITIESACCTCLPOSMSTRDATA
description: "Securitiesacctclposmstrdata"
app_component: FIN-FSCM-TRM-2CL
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
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITIESACCTCLPOSMSTRDATA

**Securitiesacctclposmstrdata**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
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
| `SecurityClassPositionUUID` | ✓ | |  | `os_guid` |  |  |
| `CompanyCode` |  | |  | `company_code` |  |  |
| `SecurityAccount` |  | |  | `security_account` |  |  |
| `SecurityClass` |  | |  | `security_id` |  |  |
| `Portfolio` |  | |  | `portfolio` |  |  |
| `TreasuryFinancialObject` |  | |  | `objnr` |  |  |
| `_SecurityClass` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_TreasuryPortfolio` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClass` | `I_SecurityClass` | [1..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_TreasuryPortfolio` | `I_TreasuryPortfolio` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED }

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: { usageType.dataClass:      #TRANSACTIONAL, 
                usageType.serviceQuality: #D,
                usageType.sizeCategory:   #M,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE  ] }
@ObjectModel.sapObjectNodeType.name: 'SecuritiesAcctClPosMstrData'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Class Position in Securities Account'

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.automatic: true } 
@Analytics.technicalName: 'ITRSECACCPOSMD'

define view entity I_SecuritiesAcctClPosMstrData 
  as select from trst_claspos as SecurityClassPos
  association [1..1] to I_SecurityClass     as _SecurityClass     on  SecurityClassPos.security_id     = _SecurityClass.SecurityClass
  association [1..1] to I_SecurityAccount   as _SecurityAccount   on  _SecurityAccount.CompanyCode     = SecurityClassPos.company_code
                                                                  and _SecurityAccount.SecurityAccount = SecurityClassPos.security_account
  association [1..1] to I_CompanyCode       as _CompanyCode       on  _CompanyCode.CompanyCode = SecurityClassPos.company_code
  association [0..1] to I_TreasuryPortfolio as _TreasuryPortfolio on  _TreasuryPortfolio.Portfolio     = $projection.Portfolio
                                                                  and _TreasuryPortfolio.CompanyCode   = $projection.CompanyCode
{
  key SecurityClassPos.os_guid          as SecurityClassPositionUUID,
      SecurityClassPos.company_code     as CompanyCode,
      SecurityClassPos.security_account as SecurityAccount,
      SecurityClassPos.security_id      as SecurityClass,
      SecurityClassPos.portfolio        as Portfolio,
      SecurityClassPos.objnr            as TreasuryFinancialObject,

      /* Associations */
      _CompanyCode,
      _SecurityAccount,
      _SecurityClass,
      _TreasuryPortfolio
}
```
