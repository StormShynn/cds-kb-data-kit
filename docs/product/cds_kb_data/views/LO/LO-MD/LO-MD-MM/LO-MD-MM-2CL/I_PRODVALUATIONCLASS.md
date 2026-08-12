---
name: I_PRODVALUATIONCLASS
description: "Prodvaluationclass"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
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
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODVALUATIONCLASS

**Prodvaluationclass**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationClass` | ✓ | |  | `bklas` |  |  |
| `AcctCategoryRef` |  | |  | `kkref` |  |  |
| `ProductValuationClassOID` |  | |  | `case when I_MdiOidConfiguration.Context is initial or I_MdiOidConfiguration.ComposeOid is initial then cast( t025.bklas as valuationclass_oid ) when I_MdiOidConfiguration.Context is not initial and I_MdiOidConfiguration.ComposeOid is not initial then cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), t025.bklas ) as valuationclass_oid ) end` |  |  |
| `_ValuationClassText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValuationClassText` | `I_Prodvaluationclasstxt` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IVALCLASS',
  compiler.compareFilter: true,
  preserveKey:true
 }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuation Class'
@Search.searchable: true
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  dataCategory: #VALUE_HELP,
  representativeKey: 'ValuationClass',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY,
                           #ANALYTICAL_DIMENSION
                         ]
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'ProductValuationClass'
@ObjectModel.alternativeKey:[{id:'OID',element:['ProductValuationClassOID']}]
@ObjectModel.objectIdentifier.oidElement:'ProductValuationClassOID'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

define view I_Prodvaluationclass
  as select from           t025
    left outer to one join I_MdiOidConfiguration on I_MdiOidConfiguration.ObjectTypeCode = '5618'
  association [0..*] to I_Prodvaluationclasstxt as _ValuationClassText on $projection.ValuationClass = _ValuationClassText.ValuationClass

{
       @ObjectModel.text.association: '_ValuationClassText'
       @Search: {
          defaultSearchElement: true,
          fuzzinessThreshold: 0.8,
          ranking: #HIGH
         }  
  key  t025.bklas as ValuationClass,
       t025.kkref as AcctCategoryRef,
       @ObjectModel.filter.enabled:false
       @ObjectModel.sort.enabled:false
       //Context ID is not specified
       case when I_MdiOidConfiguration.Context is initial
       //            special handling for code with initial value; shall be skipped if such a code value does not exist
       //            or
       //Composition is disabled
              or I_MdiOidConfiguration.ComposeOid is initial then
             cast( t025.bklas as valuationclass_oid )
       //Context ID is specified
            when I_MdiOidConfiguration.Context is not initial
             and I_MdiOidConfiguration.ComposeOid is not initial then
             cast( concat( concat( I_MdiOidConfiguration.Context, ':' ), t025.bklas ) as valuationclass_oid )
        end       as ProductValuationClassOID,

       _ValuationClassText
}
```
