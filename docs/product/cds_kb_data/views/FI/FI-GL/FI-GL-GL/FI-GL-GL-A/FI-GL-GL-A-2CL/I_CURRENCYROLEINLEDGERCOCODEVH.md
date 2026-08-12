---
name: I_CURRENCYROLEINLEDGERCOCODEVH
description: "This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger."
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger."
semantic_vi: "Currency Types — CDS view giao diện dựa trên Currency Types."
keywords:
  - "currency"
  - "types"
  - "role"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
---
# I_CURRENCYROLEINLEDGERCOCODEVH

**This CDS view provides the prerequisites for answering the following business questions: How many currency roles are defined? In contrast to I_CurrencyRole, it only displays the currency roles which are assigned to a company code/ledger.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyRole` | ✓ | |  | `cast(CurrencyRole as fins_curtp preserving type )` | `CHAR(2)` | Currency Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CurrencyRoleText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENCYROLEINLEDGERCOCODEVH')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFILDCCCRVH', preserveKey: true, compiler.compareFilter: true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Currency Types'
@VDM.viewType: #COMPOSITE
@ObjectModel: { representativeKey: 'CurrencyRole',
                dataCategory: #VALUE_HELP,
                usageType.serviceQuality: #C,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
                modelingPattern: #VALUE_HELP_PROVIDER }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_CurrencyRoleInLedgerCoCodeVH
  as select distinct from P_LedgerCompanyCodeCrcyRoles2
  association [0..*] to I_CurrencyRoleText as _Text on $projection.CurrencyRole = _Text.CurrencyRole
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast(CurrencyRole as fins_curtp preserving type ) as CurrencyRole,

      _Text
}
group by
  CurrencyRole
```
