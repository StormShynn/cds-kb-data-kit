---
name: I_FISCALTIMEUNITVALUEHELP
description: "Fiscal Time Unit"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALTIMEUNITVALUEHELP')/$value
semantic_en: "Fiscal Time Unit"
semantic_vi: "Fiscal Time Unit — CDS view giao diện dựa trên dd07t."
keywords:
  - "fiscal"
  - "time"
  - "unit"
  - "name"
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
# I_FISCALTIMEUNITVALUEHELP

**Fiscal Time Unit**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALTIMEUNITVALUEHELP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalTimeUnit` | ✓ | |  | `cast( domvalue_l as fins_fscl_tperiod_offset_unit )` | `CHAR(1)` | Fiscal Time Period Offset Unit |
| `FiscalTimeUnitName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALTIMEUNITVALUEHELP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FISCALTIMEUNITVALUEHELP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIFTUVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FiscalTimeUnit'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

@EndUserText.label: 'Fiscal Time Unit'
define view I_FiscalTimeUnitValueHelp
  as select from dd07t
{
      @ObjectModel.text.element: ['FiscalTimeUnitName']
      key cast( domvalue_l as fins_fscl_tperiod_offset_unit ) as FiscalTimeUnit,
      
      @Semantics.text: true
      ddtext as FiscalTimeUnitName      
}
where 
    domname = 'FINS_FSCL_TPERIOD_OFFSET_UNIT' 
and as4local = 'A'
and ddlanguage = $session.system_language
```
