---
name: I_BR_SITACCOUNTDETERMINATION
description: "This CDS view provides you with a list of the assignments of the general ledger of the transit stock accounts to valuation classes and to chart of accounts for Stock Transfer (STO). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_SITACCOUNTDETERMINATION')/$value
semantic_en: "This CDS view provides you with a list of the assignments of the general ledger of the transit stock accounts to valuation classes and to chart of accounts for Stock Transfer (STO). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Brazil SiT Account Determination — CDS view giao diện dựa trên logbr_sit_accdet."
keywords:
  - "brazil"
  - "sit"
  - "account"
  - "determination"
  - "chart"
  - "accounts"
  - "material"
  - "valuation"
  - "class"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
  - stock
---
# I_BR_SITACCOUNTDETERMINATION

**This CDS view provides you with a list of the assignments of the general ledger of the transit stock accounts to valuation classes and to chart of accounts for Stock Transfer (STO). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_SITACCOUNTDETERMINATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `cast( chart_of_accounts as fis_ktopl preserving type )` | `CHAR(4)` | Chart of Accounts |
| `MaterialValuationClass` | ✓ | |  | `valuation_class` | `CHAR(4)` | Valuation Class |
| `GLAccount` |  | |  | `cast( account_number as fis_racct preserving type )` | `CHAR(10)` | G/L Account |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_SITACCOUNTDETERMINATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_SITACCOUNTDETERMINATION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBRSITACCOUNTDET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Brazil SiT Account Determination'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_SITAccountDetermination
  as select from logbr_sit_accdet
{
  key cast( chart_of_accounts as fis_ktopl preserving type ) as ChartOfAccounts,
  key valuation_class                                        as MaterialValuationClass,
      cast( account_number as fis_racct preserving type )    as GLAccount
}
```
