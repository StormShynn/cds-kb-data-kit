---
name: I_FISCALQUARTERDATEFUNCSGLVH
description: "Fiscal Quarter Single Date Function"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALQUARTERDATEFUNCSGLVH')/$value
semantic_en: "Fiscal Quarter Single Date Function"
semantic_vi: "Fiscal Quarter Single Date Function — CDS view giao diện dựa trên I_FiscalDateFunction."
keywords:
  - "fiscal"
  - "quarter"
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
# I_FISCALQUARTERDATEFUNCSGLVH

**Fiscal Quarter Single Date Function**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALQUARTERDATEFUNCSGLVH')/$value) |

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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALQUARTERDATEFUNCSGLVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALQUARTERDATEFUNCSGLVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIFQFSCLFSVH'
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
@EndUserText.label: 'Fiscal Quarter Single Date Function'
define view I_FiscalQuarterDateFuncSglVH as select from I_FiscalDateFunction

  association [0..*] to I_FiscalDateFunctionText as _DateFunctionText on $projection.DateFunction = _DateFunctionText.DateFunction
{

      @ObjectModel.text.association: '_DateFunctionText'
      //      @Search.defaultSearchElement: true
      //      @Search.ranking: #HIGH
  key I_FiscalDateFunction.DateFunction,

      _DateFunctionText

}
where
    I_FiscalDateFunction.DateFunctionGranularity = '04'
and I_FiscalDateFunction.DateFunctionStartOffsetValue = I_FiscalDateFunction.DateFunctionEndOffsetValue
and I_FiscalDateFunction.DateFuncStartRelativeOffset  = I_FiscalDateFunction.DateFunctionEndRelativeOffset
and I_FiscalDateFunction.DateFunctionStartYearOffset  = I_FiscalDateFunction.DateFunctionEndYearOffset
```
