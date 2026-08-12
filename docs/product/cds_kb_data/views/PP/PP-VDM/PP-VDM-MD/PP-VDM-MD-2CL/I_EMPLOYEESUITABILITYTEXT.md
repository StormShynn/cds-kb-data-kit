---
name: I_EMPLOYEESUITABILITYTEXT
description: "Employeesuitabilitytext"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_EMPLOYEESUITABILITYTEXT

**Employeesuitabilitytext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `EmployeeSuitability` | ✓ | |  | `qualf` |  |  |
| `EmployeeSuitabilityName` |  | |  | `txt` |  |  |
| `_EmployeeSuitability` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EmployeeSuitability` | `I_EmployeeSuitability` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPEMPLSUITTEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'EmployeeSuitability'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #ORGANIZATIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Employee Suitability - Text'

define view I_EmployeeSuitabilityText
  as select from t423t as txt
  association [1..1] to I_EmployeeSuitability as _EmployeeSuitability on  $projection.Plant = _EmployeeSuitability.Plant 
                                                                      and $projection.EmployeeSuitability = _EmployeeSuitability.EmployeeSuitability
  association [0..1] to I_Language            as _Language            on  $projection.Language = _Language.Language
  association [1..1] to I_Plant               as _Plant               on  $projection.Plant = _Plant.Plant
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras as Language,
      @ObjectModel.foreignKey.association: '_Plant'
  key txt.werks as Plant,
      @ObjectModel.foreignKey.association: '_EmployeeSuitability'
      @ObjectModel.text.element: 'EmployeeSuitabilityName'
  key txt.qualf as EmployeeSuitability,
      @Semantics.text: true
      txt.txt   as EmployeeSuitabilityName,

      _Plant,
      _EmployeeSuitability,
      _Language
};
```
