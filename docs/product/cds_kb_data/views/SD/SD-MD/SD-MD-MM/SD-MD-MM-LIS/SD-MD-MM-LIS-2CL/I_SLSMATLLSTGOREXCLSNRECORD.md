---
name: I_SLSMATLLSTGOREXCLSNRECORD
description: "Slsmatllstgorexclsnrecord"
app_component: SD-MD-MM-LIS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - component:SD-MD-MM-LIS-2CL
  - lob:Sales & Distribution
---
# I_SLSMATLLSTGOREXCLSNRECORD

**Slsmatllstgorexclsnrecord**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-LIS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Source Code

```abap
@EndUserText.label: 'Sales Material Listing Exclusion Record'

@VDM.viewType: #BASIC

@AccessControl:
{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}

@ObjectModel.representativeKey: 'SlsMatlLstgOrExclsnRecordUUID'

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

@ObjectModel.sapObjectNodeType.name: 'SlsMatlLstgOrExclsnRecord'


define view entity I_SlsMatlLstgOrExclsnRecord
  as select from sdmd_lstg_exclsn
{
  key sdmd_lstg_exclsn.list_excl_uuid       as SlsMatlLstgOrExclsnRecordUUID,

      // *** Authorization Check Fields  ***
      sdmd_lstg_exclsn.kappl                as ConditionApplication,
      sdmd_lstg_exclsn.kschl                as ConditionType,
      sdmd_lstg_exclsn.conditiontable       as ConditionTable,

      sdmd_lstg_exclsn.vkorg                as SalesOrganization,
      sdmd_lstg_exclsn.vtweg                as DistributionChannel,
      sdmd_lstg_exclsn.spart                as Division,

      // *** Data Fields ***

      sdmd_lstg_exclsn.datbi                as ConditionValidityEndDate,
      sdmd_lstg_exclsn.datab                as ConditionValidityStartDate,
      sdmd_lstg_exclsn.upd_tmstmp           as LastChangeDateTime,

      // *** Condition Fields ***
      sdmd_lstg_exclsn.cust_hier_node_type  as CustomerHierarchyNodeType,
      sdmd_lstg_exclsn.cust_hier_node_value as CustomerHierarchyNodeID,
      sdmd_lstg_exclsn.cust_hier_root_node  as CustomerHierarchyRootNode,

      sdmd_lstg_exclsn.vbtyp                as SDDocumentCategory,
      sdmd_lstg_exclsn.auart                as SalesDocumentType,

      sdmd_lstg_exclsn.kunnr                as Customer,
      sdmd_lstg_exclsn.kdgrp                as CustomerGroup,
      sdmd_lstg_exclsn.kvgr1                as AdditionalCustomerGroup1,
      sdmd_lstg_exclsn.kvgr2                as AdditionalCustomerGroup2,
      sdmd_lstg_exclsn.kvgr3                as AdditionalCustomerGroup3,
      sdmd_lstg_exclsn.kvgr4                as AdditionalCustomerGroup4,
      sdmd_lstg_exclsn.kvgr5                as AdditionalCustomerGroup5,

      sdmd_lstg_exclsn.kdkg1                as CustomerConditionGroup1,
      sdmd_lstg_exclsn.kdkg2                as CustomerConditionGroup2,
      sdmd_lstg_exclsn.kdkg3                as CustomerConditionGroup3,
      sdmd_lstg_exclsn.kdkg4                as CustomerConditionGroup4,
      sdmd_lstg_exclsn.kdkg5                as CustomerConditionGroup5,

      sdmd_lstg_exclsn.kunag                as SoldToParty,
      sdmd_lstg_exclsn.kunwe                as ShipToParty,
      sdmd_lstg_exclsn.knrze                as PayerParty,
      sdmd_lstg_exclsn.vrtnr                as SalesEmployee,
      sdmd_lstg_exclsn.spdnr                as ForwardingAgent,

      cast (sdmd_lstg_exclsn.matnr  as productnumber preserving type) as Product,
      cast (sdmd_lstg_exclsn.matkl  as productgroup preserving type)  as ProductGroup,
      sdmd_lstg_exclsn.mvgr1                as AdditionalMaterialGroup1,
      sdmd_lstg_exclsn.mvgr2                as AdditionalMaterialGroup2,
      sdmd_lstg_exclsn.mvgr3                as AdditionalMaterialGroup3,
      sdmd_lstg_exclsn.mvgr4                as AdditionalMaterialGroup4,
      sdmd_lstg_exclsn.mvgr5                as AdditionalMaterialGroup5,
      cast (sdmd_lstg_exclsn.mtart as producttype preserving type ) as ProductType,
      sdmd_lstg_exclsn.kondm                as MaterialPricingGroup,
      sdmd_lstg_exclsn.matwa                as OriginallyRequestedMaterial,
      sdmd_lstg_exclsn.pmatn                as PricingReferenceMaterial,
      sdmd_lstg_exclsn.meina                as UnitOfMeasure,
      
      sdmd_lstg_exclsn.prod_hier_node       as ProdUnivHierarchyNode,

      sdmd_lstg_exclsn.vkbur                as SalesOffice,
      sdmd_lstg_exclsn.werks                as Plant,
      sdmd_lstg_exclsn.wkcou                as PlantCounty,
      sdmd_lstg_exclsn.wkreg                as PlantRegion,
      sdmd_lstg_exclsn.wkcty                as PlantCity,

      sdmd_lstg_exclsn.inco1                as IncotermsClassification,
      sdmd_lstg_exclsn.inco2                as IncotermsTransferLocation,
      sdmd_lstg_exclsn.ean11                as InternationalArticleNumber,

      sdmd_lstg_exclsn.aland                as DepartureCountry,
      sdmd_lstg_exclsn.land1                as DestinationCountry,
      sdmd_lstg_exclsn.regio                as Region,

      sdmd_lstg_exclsn.charg                as Batch,
      sdmd_lstg_exclsn.bukrs                as CompanyCode,
      sdmd_lstg_exclsn.infnr                as PurchasingInfoRecord,

      sdmd_lstg_exclsn.herkl                as CountryOfOrigin,
      sdmd_lstg_exclsn.konda                as CustomerPriceGroup,
      sdmd_lstg_exclsn.vsbed                as ShippingCondition,
      sdmd_lstg_exclsn.vmsta                as ProductSalesStatus
      
}
where
  sdmd_lstg_exclsn.kappl = 'V'
```
