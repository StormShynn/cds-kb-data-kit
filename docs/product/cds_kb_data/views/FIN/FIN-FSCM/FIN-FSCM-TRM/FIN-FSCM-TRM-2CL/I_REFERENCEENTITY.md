---
name: I_REFERENCEENTITY
description: "Referenceentity"
app_component: FIN-FSCM-TRM-2CL
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
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_REFERENCEENTITY

**Referenceentity**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
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
| `TreasuryReferenceEntity` | ✓ | |  | `ref_entity` |  |  |
| `TextDescription` |  | |  | `description` |  |  |
| `BusinessPartner` |  | |  | `business_partner` |  |  |
| `CompanyCode` |  | |  | `compcode` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREFERENCEENT'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName:#LOCAL
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.representativeKey: 'TreasuryReferenceEntity'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled:true}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'ReferenceEntity Attribute'
@ObjectModel.sapObjectNodeType.name: 'TreasuryReferenceEntity'
define view I_ReferenceEntity
  as select from    tyc_ref_ent_def as RefEntity
    left outer join ftbb_yc_ref_ent as RefEntityAttri on RefEntity.ref_entity = RefEntityAttri.ref_entity
  association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_CompanyCode     as _CompanyCode     on $projection.CompanyCode = _CompanyCode.CompanyCode

{
      @ObjectModel.text.element:'TextDescription'
      //   @Search: {
      //      defaultSearchElement: true,
      //      ranking: #HIGH,
      //      fuzzinessThreshold: 0.7
      //   }
  key RefEntity.ref_entity            as TreasuryReferenceEntity,
      @Semantics.text
      //   @Search: {
      //      ranking: #HIGH,
      //      fuzzinessThreshold: 0.7
      //   }
      RefEntity.description           as TextDescription,
      RefEntityAttri.business_partner as BusinessPartner,
      RefEntityAttri.compcode         as CompanyCode,

      _BusinessPartner,
      _CompanyCode

}
```
