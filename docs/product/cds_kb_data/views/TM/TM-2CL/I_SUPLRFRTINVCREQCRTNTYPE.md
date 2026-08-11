---
name: I_SUPLRFRTINVCREQCRTNTYPE
description: "Supplier Freight Inv Req Creation Type"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCRTNTYPE')/$value
semantic_en: "Supplier Freight Inv Req Creation Type"
semantic_vi: "I_SUPLRFRTINVCREQCRTNTYPE — CDS view cơ bản dựa trên dd07l."
keywords:
  - "suplrfrtinvcreqcrtntype"
  - "suplr"
  - "invc"
  - "creation"
  - "type"
tags:
  - TM
  - component:TM-2CL
  - interface-view
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQCRTNTYPE

**Supplier Freight Inv Req Creation Type**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCRTNTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqCreationType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_sfir_creation_type preserving type)` | `CHAR(2)` | Freight Settlement Document Creation Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SuplrFrtInvcReqCrtnTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCRTNTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQCRTNTYPE')/$value)*

```abap
@EndUserText:   {label:              'Supplier Freight Inv Req Creation Type'}
@Analytics:     {dataCategory:       #DIMENSION,
                 internalName:       #LOCAL,
                 dataExtraction:     {enabled: true}}
@ObjectModel:   {sapObjectNodeType.name: 'SuplrFrtInvcReqCreationType',
                 representativeKey:  'SuplrFrtInvcReqCreationType',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:          #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
//                                         #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:   #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqCrtnType_2'}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_SuplrFrtInvcReqCrtnType
  as select from dd07l
  association [0..*] to I_SuplrFrtInvcReqCrtnTypeT as _Text on $projection.SuplrFrtInvcReqCreationType = _Text.SuplrFrtInvcReqCreationType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/vdm_sfir_creation_type preserving type) as SuplrFrtInvcReqCreationType,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/SFIR_CREATE_TYPE'
  and as4local = 'A';
```
