---
name: I_CONSOLIDATIONYEARCALCULATOR
description: "This CDS view provides values for Fiscal Year and Fiscal Period and their calculated properties, such as Next Fiscal Period, Previous Fiscal Year, and Fiscal Year Variant. Currently, the Fiscal Year Variant is restricted to the value K4."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONYEARCALCULATOR')/$value
semantic_en: "This CDS view provides values for Fiscal Year and Fiscal Period and their calculated properties, such as Next Fiscal Period, Previous Fiscal Year, and Fiscal Year Variant. Currently, the Fiscal Year Variant is restricted to the value K4."
semantic_vi: "Consolidation Year Calculator — CDS view giao diện dựa trên I_FiscalPeriodForVariant."
keywords:
  - "consolidation"
  - "year"
  - "calculator"
  - "fiscal"
  - "variant"
  - "period"
  - "next"
  - "previous"
  - "back"
  - "shift1"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
---
# I_CONSOLIDATIONYEARCALCULATOR

**This CDS view provides values for Fiscal Year and Fiscal Period and their calculated properties, such as Next Fiscal Period, Previous Fiscal Year, and Fiscal Year Variant. Currently, the Fiscal Year Variant is restricted to the value K4.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONYEARCALCULATOR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `NextFiscalPeriod` |  | |  |  | `NUMC(3)` | Next Fiscal Period |
| `PreviousPeriodBackShift1` |  | |  | `case when FiscalPeriod = '001' then cast(lpad(cast( '012' as abap.char(12)),3,'0') as poper) else cast(lpad(cast(cast( FiscalPeriod as abap.int1( 3 )) - 1 as abap.char(12)),3,'0') as fincs_prev_period_backshift1) end` | `NUMC(3)` | Previous Period Back Shift1 |
| `PreviousFiscalYear` |  | |  | `cast(lpad(cast(cast( FiscalYear as abap.int2( 5 )) - 1 as abap.char(12)),4,'0') as ryear)` | `NUMC(4)` | Fiscal Year |
| `NextFiscalYear` |  | |  | `cast(lpad(cast(cast( FiscalYear as abap.int2( 5 )) + 1 as abap.char(12)),4,'0') as ryear)` | `NUMC(4)` | Fiscal Year |
| `FiscalYearShift2` |  | |  | `cast(lpad(cast(cast( FiscalYear as abap.int2( 5 )) + 2 as abap.char(12)),4,'0') as ryear)` | `NUMC(4)` | Fiscal Year |
| `FiscalYearShift3` |  | |  | `cast(lpad(cast(cast( FiscalYear as abap.int2( 5 )) + 3 as abap.char(12)),4,'0') as ryear)` | `NUMC(4)` | Fiscal Year |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONYEARCALCULATOR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSOLIDATIONYEARCALCULATOR')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICCYEARCTR'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel: {
    usageType: {
      dataClass: #CUSTOMIZING,
      serviceQuality: #D,
      sizeCategory: #S
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Consolidation Year Calculator'
define view I_ConsolidationYearCalculator
  as select from I_FiscalPeriodForVariant
{
  key FiscalYearVariant,
  key FiscalYear,
  key FiscalPeriod,
      NextFiscalPeriod,
      case when FiscalPeriod = '001'
           then cast(lpad(cast( '012' as abap.char(12)),3,'0') as poper)
      else
           cast(lpad(cast(cast( FiscalPeriod as abap.int1( 3 )) - 1 as abap.char(12)),3,'0') as fincs_prev_period_backshift1)
      end                                                                                       as PreviousPeriodBackShift1,

      cast(lpad(cast(cast( FiscalYear as abap.int2( 5 )) - 1 as abap.char(12)),4,'0') as ryear) as PreviousFiscalYear,

      cast(lpad(cast(cast( FiscalYear as abap.int2( 5 )) + 1 as abap.char(12)),4,'0') as ryear) as NextFiscalYear,

      cast(lpad(cast(cast( FiscalYear as abap.int2( 5 )) + 2 as abap.char(12)),4,'0') as ryear) as FiscalYearShift2,

      cast(lpad(cast(cast( FiscalYear as abap.int2( 5 )) + 3 as abap.char(12)),4,'0') as ryear) as FiscalYearShift3
}
where
  FiscalYearVariant = 'K4'
```
