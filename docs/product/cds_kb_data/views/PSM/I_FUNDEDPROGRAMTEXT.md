---
name: I_FUNDEDPROGRAMTEXT
description: "Funded Program - Text"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMTEXT')/$value
semantic_en: "Funded Program - Text"
semantic_vi: "Funded Program - Text — CDS view giao diện dựa trên fmmeasuret."
keywords:
  - "funded"
  - "program"
  - "text"
  - "financial"
  - "management"
  - "area"
  - "language"
  - "name"
  - "description"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNDEDPROGRAMTEXT

**Funded Program - Text**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `fmarea` | `CHAR(4)` | Financial Management Area |
| `FundedProgram` | ✓ | |  | `measure` | `CHAR(24)` | Funded Program |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `FundedProgramName` |  | |  | `cast (short_desc as fmis_fp_name)` | `CHAR(20)` | Funded Program Name |
| `FundedProgramDescription` |  | |  | `cast (description as fmis_fp_description)` | `CHAR(50)` | Funded Program Description |
| `_FinMgmtArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_FundedProgram` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinMgmtArea` | `I_FinancialManagementArea` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_FundedProgram` | `I_FundedProgram` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMTEXT')/$value)*

```abap
@EndUserText.label: 'Funded Program - Text'
@Analytics: { 
              dataExtraction.enabled: true, 
              internalName: #LOCAL 
            }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'FundedProgram'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'IFMFUNDEDPROGT'
define view I_FundedProgramText as select from fmmeasuret
association [1..1] to I_FinancialManagementArea as _FinMgmtArea   on $projection.FinancialManagementArea  = _FinMgmtArea.FinancialManagementArea
association [0..1] to I_Language                as _Language      on $projection.Language                 = _Language.Language
association [0..1] to I_FundedProgram           as _FundedProgram on  $projection.FinancialManagementArea = _FundedProgram.FinancialManagementArea  //for authorization check
                                                                  and $projection.FundedProgram           = _FundedProgram.FundedProgram
{

      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
    @ObjectModel.foreignKey.association: '_FinMgmtArea'
    key fmarea                 as FinancialManagementArea,
    key measure                as FundedProgram,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'    
    key language               as Language,
    @Semantics.text: true
    cast (short_desc as fmis_fp_name)           as FundedProgramName,  
    @Semantics.text: true
    cast (description as fmis_fp_description)   as FundedProgramDescription,
          
    _FinMgmtArea,
    _Language,
    _FundedProgram
}

//fmmeasuret fields
//LANGUAGE
//FMAREA
//MEASURE
//SHORT_DESC
//DESCRIPTION
```
