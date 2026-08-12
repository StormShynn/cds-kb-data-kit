---
name: I_TRANSPORTATIONORDEREXECSTS
description: "Transportation Order Execution Status"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTS')/$value
semantic_en: "Transportation Order Execution Status"
semantic_vi: "I_TRANSPORTATIONORDEREXECSTS — CDS view cơ bản dựa trên dd07l."
keywords:
  - "transportationorderexecsts"
  - "transportation"
  - "order"
  - "exec"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
---
# I_TRANSPORTATIONORDEREXECSTS

**Transportation Order Execution Status**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderExecSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tor_execution_status preserving type)` | `CHAR(2)` | Execution Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TransportationOrderExecStsT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORTATIONORDEREXECSTS')/$value)*

```abap
@EndUserText:   {label:                    'Transportation Order Execution Status'}
@Analytics:     {dataCategory:             #DIMENSION,
                 dataExtraction:           {enabled: true},
                 internalName:             #LOCAL}
@Analytics.technicalName: 'IEXECSTATUS'
@ObjectModel:   {representativeKey:        'TransportationOrderExecSts',
                 usageType:                {serviceQuality: #A,
                                            sizeCategory:   #S,
                                            dataClass:      #CUSTOMIZING},
                 modelingPattern:          #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY],
                 sapObjectNodeType.name: 'TranspOrderExecutionStatus'
                                           }
@VDM:           {viewType:                 #BASIC}
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ObjectModel.resultSet.sizeCategory:       #XS
@Metadata:      {allowExtensions:           true,
                 ignorePropagatedAnnotations: true}

define view entity I_TransportationOrderExecSts
  as select from dd07l
  association [0..*] to I_TransportationOrderExecStsT as _Text on $projection.TransportationOrderExecSts = _Text.TransportationOrderExecSts
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tor_execution_status preserving type) as TransportationOrderExecSts,


      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/TOR_EXECUTION_STATUS'
  and as4local = 'A';
```
