---
name: I_SLSMATLDETERMINATIONRECORD
description: "Slsmatldeterminationrecord"
app_component: SD-MD-MM-DET-2CL
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
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - component:SD-MD-MM-DET-2CL
  - lob:Sales & Distribution
---
# I_SLSMATLDETERMINATIONRECORD

**Slsmatldeterminationrecord**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-DET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@EndUserText.label: 'Material Determination Condition Record'

@VDM.viewType: #BASIC

@AccessControl:
{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}

@ObjectModel.representativeKey: 'ConditionRecord'

@ObjectModel.usageType:
{
  dataClass: #MASTER,
  sizeCategory: #M,
  serviceQuality: #A
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ] 
@Analytics.dataExtraction:
{
  enabled: true,
  delta.changeDataCapture.automatic: true
}

@ObjectModel.sapObjectNodeType.name: 'SlsMatlDeterminationRecord'

define view entity I_SlsMatlDeterminationRecord
  as select from kondd as kondd
  association [0..*] to I_SlsMatlDetnRecdAddlSubstit as _SlsMatlDetnRecdAddlSubstit
    on $projection.ConditionRecord = _SlsMatlDetnRecdAddlSubstit.ConditionRecord
{
  key kondd.knumh as ConditionRecord,

  // *** Authorization Check Fields  ***
  kondd.kappl as ConditionApplication,
  kondd.kschl as ConditionType,
  kondd.conditiontable as ConditionTable,
  
  kondd.vkorg as SalesOrganization,
  kondd.vtweg as DistributionChannel,
  kondd.spart as Division,
  
  // *** Data Fields ***
  
  kondd.smatn as SlsMatlDetnSubstituteMaterial,
  kondd.meins as SlsMatlDetnSubstitMaterialUoM,
  kondd.sugrd as MaterialSubstitutionReason,
  kondd.datbi as ConditionValidityEndDate,
  kondd.datab as ConditionValidityStartDate,
  kondd.upd_tmstmp as LastChangeDateTime,
  
  // *** Condition Fields ***
  
  kondd.vbtyp as SDDocumentCategory,
  kondd.auart as SalesDocumentType,
  
  kondd.kunnr as Customer,
  kondd.kdgrp as CustomerGroup,
  
  kondd.kunag as SoldToParty,
  kondd.kunwe as ShipToParty,
  kondd.knrze as PayerParty,
  kondd.vrtnr as SalesEmployee,
  kondd.spdnr as ForwardingAgent,
  
  cast( kondd.matnr as productnumber preserving type ) as Product,
  cast (kondd.mtart as producttype preserving type ) as ProductType,
  cast( kondd.matkl as productgroup preserving type ) as ProductGroup,
  kondd.kondm as MaterialPricingGroup,
  kondd.matwa as OriginallyRequestedMaterial,
  kondd.pmatn as PricingReferenceMaterial,

  kondd.werks as Plant,
  kondd.wkcou as PlantCounty,
  kondd.wkreg as PlantRegion,
  kondd.wkcty as PlantCity,
  
  kondd.inco1 as IncotermsClassification,
  kondd.inco2 as IncotermsTransferLocation,
  
  kondd.counc as County,
  kondd.aland as DepartureCountry,
  kondd.land1 as DestinationCountry,
  kondd.regio as Region,
  kondd.cityc as CityCode,
  
  kondd.charg as Batch,
  kondd.bukrs as CompanyCode,
  kondd.infnr as PurchasingInfoRecord,
  
  _SlsMatlDetnRecdAddlSubstit
}
where kondd.kappl = 'V'
```
