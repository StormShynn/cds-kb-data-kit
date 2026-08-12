---
name: I_FISCALWEEKDATEFUNCSINGLEVH
description: "Fiscal Week Single Date Function"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALWEEKDATEFUNCSINGLEVH')/$value
semantic_en: "Fiscal Week Single Date Function"
semantic_vi: "Fiscal Week Single Date Function — CDS view giao diện dựa trên I_FiscalDateFunction."
keywords:
  - "fiscal"
  - "week"
  - "single"
  - "date"
  - "function"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
---
# I_FISCALWEEKDATEFUNCSINGLEVH

**Fiscal Week Single Date Function**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALWEEKDATEFUNCSINGLEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DateFunction` | ✓ | |  |  | `CHAR(32)` | Relative Date Function ID |
| `_DateFunctionText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DateFunctionText` | `I_FiscalDateFunctionText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALWEEKDATEFUNCSINGLEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALWEEKDATEFUNCSINGLEVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIFWFSCLFSVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'DateFunction'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@AccessControl: { authorizationCheck: #NOT_REQUIRED }
//@Search.searchable: true
@Metadata: { allowExtensions: true ,
             ignorePropagatedAnnotations: true }
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER               
@EndUserText.label: 'Fiscal Week Single Date Function'
define view I_FiscalWeekDateFuncSingleVH as select from I_FiscalDateFunction

  association [0..*] to I_FiscalDateFunctionText as _DateFunctionText on $projection.DateFunction = _DateFunctionText.DateFunction
{

      @ObjectModel.text.association: '_DateFunctionText'
      //      @Search.defaultSearchElement: true
      //      @Search.ranking: #HIGH
  key I_FiscalDateFunction.DateFunction,

      _DateFunctionText

}
where
    I_FiscalDateFunction.DateFunctionGranularity = '02'
and I_FiscalDateFunction.DateFunctionStartOffsetValue = I_FiscalDateFunction.DateFunctionEndOffsetValue
and I_FiscalDateFunction.DateFuncStartRelativeOffset  = I_FiscalDateFunction.DateFunctionEndRelativeOffset
and I_FiscalDateFunction.DateFunctionStartYearOffset  = I_FiscalDateFunction.DateFunctionEndYearOffset
```
