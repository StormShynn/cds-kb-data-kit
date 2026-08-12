---
name: I_SUPLRFRTINVCREQTYPE
description: "Supplier Freight Invoice Request Type"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQTYPE')/$value
semantic_en: "Supplier Freight Invoice Request Type"
semantic_vi: "I_SUPLRFRTINVCREQTYPE — CDS view cơ bản dựa trên I_SUPLRFRTINVCREQTYPE."
keywords:
  - "suplrfrtinvcreqtype"
  - "suplr"
  - "invc"
  - "type"
  - "category"
  - "settlmt"
  - "wrhs"
  - "rlvt"
tags:
  - TM
  - bo:billingdocument
  - component:TM-2CL
  - interface-view
  - invoice
  - supplier
  - TM-2CL
---
# I_SUPLRFRTINVCREQTYPE

**Supplier Freight Invoice Request Type**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrFrtInvcReqType` | ✓ | |  | `cast (sfir_type as /scmtms/vdm_sfir_type preserving type)` | `CHAR(4)` | Freight Settlement Document Type |
| `SuplrFrtInvcReqCategory` |  | |  | `sfir_category` | `CHAR(2)` | Freight Settlement Document Category |
| `FrtSettlmtTypeIsBusWrhsRlvt` |  | |  | `bw_relevance` | `CHAR(1)` | SAP NetWeaver Business Warehouse |
| `_Text` | | ✓ | | | | |
| `_SuplrFrtInvcReqCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SuplrFrtInvcReqTypeText` | [0..*] |
| `_SuplrFrtInvcReqCategory` | `I_SuplrFrtInvcReqCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRFRTINVCREQTYPE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText:   {label:              'Supplier Freight Invoice Request Type'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ISFIRTYPE'
@ObjectModel:   {sapObjectNodeType.name: 'SuplrFrtInvcRequestType',
                 representativeKey:      'SuplrFrtInvcReqType',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC,
                 lifecycle.status:   #DEPRECATED,
                 lifecycle.successor: 'I_SuplrFrtInvcReqType_2'}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Search.searchable:                  false
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}

define view entity I_SuplrFrtInvcReqType
  as select from /scmtms/c_sfir_t
  association [0..*] to I_SuplrFrtInvcReqTypeText as _Text                    on $projection.SuplrFrtInvcReqType = _Text.SuplrFrtInvcReqType
  association [0..1] to I_SuplrFrtInvcReqCategory as _SuplrFrtInvcReqCategory on $projection.SuplrFrtInvcReqCategory = _SuplrFrtInvcReqCategory.SuplrFrtInvcReqCategory
{
      @ObjectModel.text.association: '_Text'
  key cast (sfir_type as /scmtms/vdm_sfir_type preserving type)                                               as SuplrFrtInvcReqType,
      @ObjectModel.foreignKey.association: '_SuplrFrtInvcReqCategory'
      sfir_category as SuplrFrtInvcReqCategory,

      @Semantics.booleanIndicator:true
      bw_relevance as FrtSettlmtTypeIsBusWrhsRlvt,
      
      /* Associations */
      _Text,
      _SuplrFrtInvcReqCategory
}

// if at a later point in time the user related fields created_by and changed_by are added
// DPP check become necessary:
//          - association to I_USER
//          - @AccessControl: privilegedAssociations:  [ '_CreatedBy', '_LastChangedBy' ]
```
