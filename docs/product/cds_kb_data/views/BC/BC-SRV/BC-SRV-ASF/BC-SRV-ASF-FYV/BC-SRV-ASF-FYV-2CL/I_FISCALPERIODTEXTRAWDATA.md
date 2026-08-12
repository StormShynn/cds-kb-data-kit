---
name: I_FISCALPERIODTEXTRAWDATA
description: "Fiscalperiodtextrawdata"
app_component: BC-SRV-ASF-FYV-2CL
software_component: SAP_BASIS
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
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - text
  - component:BC-SRV-ASF-FYV-2CL
  - lob:Basis Components
---
# I_FISCALPERIODTEXTRAWDATA

**Fiscalperiodtextrawdata**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-FYV-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FiscalYearVariant` | ✓ | |  | `cast( t009c.periv as fis_periv preserving type )` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` | ✓ | |  | `poper` | `NUMC(3)` | Posting Period |
| `FiscalYear` | ✓ | |  | `cast( t009c.bdatj as gjahr preserving type )` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriodShortName` |  | |  | `ktext` | `CHAR(3)` | Period name short text |
| `FiscalPeriodName` |  | |  | `ltext` | `CHAR(20)` | Period name long text |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Fiscal Period Texts Raw Data'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIFYPERTXTRAW'
@Analytics.internalName: #LOCAL

@ObjectModel.representativeKey: 'FiscalPeriod'
@Analytics:{
//    dataCategory: #DIMENSION,
    dataExtraction: { enabled: true } }

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]

define view entity I_FiscalPeriodTextRawData
  as select from t009c

  association [0..1] to I_FiscalYearVariant as _FiscalYearVariant on $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  //association [0..1] to I_FiscalYear        as _FiscalYear        on $projection.FiscalYearVariant = _FiscalYear.FiscalYearVariant
  //                                                                and $projection.FiscalYear       = _FiscalYear.FiscalYear
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language

{

      @Semantics.language: true
  key t009c.spras                                      as Language,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
  key cast( t009c.periv as fis_periv preserving type ) as FiscalYearVariant,
  key t009c.poper                                      as FiscalPeriod,
      //@ObjectModel.foreignKey.association: '_FiscalYear'
  key cast( t009c.bdatj as gjahr preserving type )     as FiscalYear,
      @Semantics.text: true
      t009c.ktext                                      as FiscalPeriodShortName,
      @Semantics.text: true
      t009c.ltext                                      as FiscalPeriodName,
      _FiscalYearVariant,
      //_FiscalYear,
      _Language
}
```
